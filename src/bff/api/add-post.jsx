import { generateDate } from '../utils';

export const addPost = ({ imageUrl, title, content }) =>
  fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      title,
      image_url: imageUrl,
      content,
      published_at: generateDate(),
    }),
  }).then((createdPost) => createdPost.json());
