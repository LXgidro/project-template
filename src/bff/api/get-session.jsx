import { transformSession } from '../transformers';

export const getSession = async (hash) =>
  fetch(`/api/sessions?hash=${hash}`)
    .then((loadedSession) => loadedSession.json())
    .then(
      ([loadedSession]) => loadedSession && transformSession(loadedSession)
    );
