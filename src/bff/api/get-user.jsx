import { transformUser } from '../transformers';

export const getUser = async (loginToFind) =>
  fetch(`/api/users?login=${loginToFind}`)
    .then((loadedUser) => loadedUser.json())
    .then(([loadedUser]) => loadedUser && transformUser(loadedUser));
