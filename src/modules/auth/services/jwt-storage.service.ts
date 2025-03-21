export const jwtStorage = (function () {
  let accessToken: string | null = null;

  const get = () => accessToken;
  const set = (token: string) => (accessToken = token);
  const clear = () => (accessToken = null);

  return { set, get, clear };
})();
