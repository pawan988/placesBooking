export const BASE_URL = " http://159.65.157.44";

export const get_token = () => {
  return localStorage?.getItem("auth_token");
};
