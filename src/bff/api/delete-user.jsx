export const deleteUser = (userId) =>
  fetch(`/api/users/${userId}`, {
    method: 'DELETE',
  });
