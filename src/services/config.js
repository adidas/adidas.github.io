const api = process.env.config.api;
const { baseUrl, pages, sidebarTree } = process.env.config.contributing;

export const config = {
  api,
  contributing: {
    baseUrl,
    pages,
    sidebarTree
  }
};

export const defaultHeaders = {
  'x-api-key': config.api.key
};
