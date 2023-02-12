const Tweeter = function () {
  const _posts = [];
  let postIdCounter = 0;
  let commentIdCounter = 0;

  const getPosts = function () {
    return _posts;
  };

  const addPost = function (postContent) {
    postIdCounter++;
    _posts.push({ id: "p" + postIdCounter, text: postContent, comments: [] });
  };

  const removePost = function (postID) {
    for (let postIndex in _posts) {
      if (_posts[postIndex].id === postID) {
        _posts.splice(postIndex, 1);
      }
    }
  };

  const addComment = function (postID, text) {
    for (let post of _posts) {
      if (post.id === postID) {
        commentIdCounter++;
        post.comments.push({ id: "c" + commentIdCounter, text: text });
      }
    }
  };

  const removeComment = function (postID, commentID) {
    for (let post of _posts) {
      if (post.id === postID) {
        let comments = post.comments;
        for (commentIndex in comments) {
          if (comments[commentIndex].id === commentID) {
            comments.splice(commentIndex, 1);
          }
        }
      }
    }
  };

  return {
    getPosts,
    addPost,
    removePost,
    addComment,
    removeComment,
  };
};
