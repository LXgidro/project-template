export const deletePost = (postId) =>
  fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
  });
