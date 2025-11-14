export const deleteComment = async (commentId) =>
  fetch(`/api/comments/${commentId}`, {
    method: 'DELETE',
  });
