const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      $("#posts").append(createPost(post));
    }
  };

  const createPost = function (post) {
    const postText = `<p class="post-text">${post.text}</p>`;
    const postElement = $(
      `<div class="post" data-postid="${post.id}">${postText}</div>`
    );
    appendComments(post.comments, postElement);
    postElement.append(createCommentInput());
    postElement.append($(`<div class="delete">Delete Post</div>`));
    return postElement;
  };

  const appendComments = function (comments, postElement) {
    const deleteCommentElement = `<span class="delete-comment">x </span>`;
    for (comment of comments) {
      let commentElement = $(
        `<div class="comments" data-commentid="${comment.id}">${deleteCommentElement} ${comment.text}</div>`
      );
      postElement.append(commentElement);
    }
  };

  const createCommentInput = function () {
    const input = `<input placeholder="Got Something to say?"/>`;
    const submitButton = `<button class="addComment">Comment</button>`;
    return `<div class="add-comment">${input} ${submitButton}</div>`;
  };

  return { renderPosts };
};
