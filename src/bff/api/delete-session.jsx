export const deleteSession = async (sessionId) =>
  fetch(`/api/sessions/${sessionId}`, {
    method: 'DELETE',
  });
