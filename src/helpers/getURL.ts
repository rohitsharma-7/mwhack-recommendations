export const webUrl = (path = "") => {
  return process.env.NEXT_WEB_APP_URL + "/" + path;
};
