export const updatePost = ({ id, imageUrl, title, content }) =>
  fetch(`/api/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      id,
      image_url: imageUrl,
      title,
      content,
    }),
  }).then((loadedPost) => loadedPost.json());
