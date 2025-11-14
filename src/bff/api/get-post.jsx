import { transformPost } from '../transformers';

export const getPost = async (postId) =>
  fetch(`/api/posts/${postId}`)
    .then((res) => {
      if (res.ok) {
        return res;
      }
      const error =
        res.status === 404 ? 'Страница не существует' : 'Что-то пошло не так';

      return Promise.reject(error);
    })
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
