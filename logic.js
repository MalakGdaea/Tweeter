const Tweeter = function () {
  const _posts = [];
  _posts.push(...posts);
  let _postIdCounter = dataPostCounter;
  let _commentIdCounter = dataCommentsCounter;

  const getPosts = function () {
    return _posts;
  };

  const findPostIndex = function (postID) {
    for (let postIndex in _posts) {
      if (_posts[postIndex].id === postID) {
        return postIndex;
      }
    }
    return -1;
  };

  const addPost = function (postContent) {
    _postIdCounter++;
    _posts.push({
      id: "p" + _postIdCounter,
      text: postContent,
      comments: [],
    });
  };

  const removePost = function (postID) {
    let postIndex = findPostIndex(postID);
    _posts.splice(postIndex, 1);
  };

  const addComment = function (postID, text) {
    let postIndex = findPostIndex(postID);
    _commentIdCounter++;
    _posts[postIndex].comments.push({
      id: "c" + _commentIdCounter,
      text: text,
    });
  };

  const removeComment = function (postID, commentID) {
    let postIndex = findPostIndex(postID);
    let comments = _posts[postIndex].comments;
    for (commentIndex in comments) {
      if (comments[commentIndex].id === commentID) {
        comments.splice(commentIndex, 1);
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
