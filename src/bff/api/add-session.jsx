export const addSession = (hash, user) =>
  fetch('/api/sessions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      hash,
      user,
    }),
  });
