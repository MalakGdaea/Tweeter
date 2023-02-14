const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      $("#posts").append(creatPost(post));
    }
  };

  const creatPost = function (post) {
    const POST_TEXT = `<p class="post-text">${post.text}</p>`;
    const POST_ElEMENT = $(
      `<div class="post" data-postid="${post.id}">${POST_TEXT}</div>`
    );
    appendComments(post.comments, POST_ElEMENT);
    POST_ElEMENT.append(createCommentInput());
    POST_ElEMENT.append($(`<div class="delete">Delete Post</div>`));
    return POST_ElEMENT;
  };

  const appendComments = function (comments, postElement) {
    const DELETE_COMMENT_ELEMENT = `<span class="delete-comment">x </span>`;
    for (comment of comments) {
      let commentElement = $(
        `<div class="comments" data-commentid="${comment.id}">${DELETE_COMMENT_ELEMENT} ${comment.text}</div>`
      );
      postElement.append(commentElement);
    }
  };

  const createCommentInput = function () {
    const INPUT = `<input placeholder="Got Something to say?"/>`;
    const SUBMIT_BUTTON = `<button class="addComment">Comment</button>`;
    return `<div class="add-comment">${INPUT} ${SUBMIT_BUTTON}</div>`;
  };

  return { renderPosts };
};
