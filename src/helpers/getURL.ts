export const webUrl = (path = "") => {
  return 'http://' + process.env.NEXT_WEB_APP_URL + "/" + path;
};
