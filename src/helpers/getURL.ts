export const webUrl = (path: string = "") => {
  return process.env.NEXT_WEB_APP_URL + "/" + path;
};
