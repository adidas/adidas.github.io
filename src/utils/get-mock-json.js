import axios from 'axios';

export async function getMockJson(fileName, isServer) {
  let data;

  if (isServer) {
    data = require(`../static/data/${ fileName }`);
  } else {
    const response = await axios.get(`/data/${ fileName }`);

    data = response.data;
  }

  return data;
}
