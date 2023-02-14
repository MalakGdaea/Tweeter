const tweeter = Tweeter();
const renderer = Renderer();
renderer.renderPosts(tweeter.getPosts());

const post = function () {
  let input = $("#post").siblings("input");
  const POST_TEXT = input.val();
  if (POST_TEXT != "") {
    tweeter.addPost(POST_TEXT);
    renderer.renderPosts(tweeter.getPosts());
    input.val("");
  }
};

$("#posts").on("click", ".delete", function () {
  const POST_ID = $(this).closest(".post").data().postid;
  tweeter.removePost(POST_ID);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".addComment", function () {
  const COMMENT_TEXT = $(this).siblings("input").val();
  const POST_ID = $(this).closest(".post").data().postid;
  if (COMMENT_TEXT != "") {
    tweeter.addComment(POST_ID, COMMENT_TEXT);
    renderer.renderPosts(tweeter.getPosts());
  }
});

$("#posts").on("click", ".delete-comment", function () {
  const POST_ID = $(this).closest(".post").data().postid;
  const COMMENT_ID = $(this).closest(".comments").data().commentid;
  tweeter.removeComment(POST_ID, COMMENT_ID);
  renderer.renderPosts(tweeter.getPosts());
});
