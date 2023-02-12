const tweeter = Tweeter();
const renderer = Renderer();
tweeter.addPost("First post!");
tweeter.addPost("Aw man, I wanted to be first");
tweeter.addComment("p1", "First comment on first post!");
tweeter.addComment("p1", "Second comment on first post!!");
tweeter.addComment("p1", "Third comment on first post!!!");

tweeter.addComment("p2", "Don't wory second poster, you'll be first one day.");
tweeter.addComment("p2", "Yeah, believe in yourself!");
tweeter.addComment("p2", "Haha second place what a joke.");
renderer.renderPosts(tweeter.getPosts());

const post = function () {
  let input = $("#post").siblings("input");
  const POST_TEXT = input.val();
  tweeter.addPost(POST_TEXT);
  renderer.renderPosts(tweeter.getPosts());
  input.val("");
};

$("#posts").on("click", ".delete", function () {
  const POST_ID = $(this).closest(".post").data().postid;
  tweeter.removePost(POST_ID);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".addComment", function () {
  const COMMENT_TEXT = $(this).siblings("input").val();
  const POST_ID = $(this).closest(".post").data().postid;
  tweeter.addComment(POST_ID, COMMENT_TEXT);
  renderer.renderPosts(tweeter.getPosts());
});

$("#posts").on("click", ".delete-comment", function () {
  const POST_ID = $(this).closest(".post").data().postid;
  const COMMENT_ID = $(this).closest(".comments").data().commentid;
  tweeter.removeComment(POST_ID, COMMENT_ID);
  renderer.renderPosts(tweeter.getPosts());
});
