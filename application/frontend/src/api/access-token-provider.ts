type AccessTokenGetter = () => Promise<string>;

export let getAccessToken: AccessTokenGetter = function () {
  throw new Error('getAccessToken is not set');
};

export function setAccessTokenGetter(accessTokenGetter: AccessTokenGetter) {
  getAccessToken = accessTokenGetter;
}
