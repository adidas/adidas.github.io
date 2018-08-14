export async function getMockJson(fileName, isServer) {
  let data;

  if (isServer) {
    data = require(`../static/data/${ fileName }`);
  } else {
    const response = await fetch(`/data/${ fileName }`);

    data = await response.json();
  }

  return data;
}
