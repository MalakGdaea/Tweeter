const tweeter = Tweeter();
const renderer = Renderer();
renderer.renderPosts(tweeter.getPosts());

const post = function () {
  let input = $("#post").siblings("input");
  const postText = input.val();
  if (postText != "") {
    tweeter.addPost(postText);
    renderer.renderPosts(tweeter.getPosts());
    input.val("");
  }
};

$("#posts").on("click", ".delete", function () {
  const postID = $(this).closest(".post").data().postid;
  tweeter.removePost(postID);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".addComment", function () {
  const commentText = $(this).siblings("input").val();
  const postID = $(this).closest(".post").data().postid;
  if (commentText != "") {
    tweeter.addComment(postID, commentText);
    renderer.renderPosts(tweeter.getPosts());
  }
});

$("#posts").on("click", ".delete-comment", function () {
  const postID = $(this).closest(".post").data().postid;
  const commentID = $(this).closest(".comments").data().commentid;
  tweeter.removeComment(postID, commentID);
  renderer.renderPosts(tweeter.getPosts());
});
