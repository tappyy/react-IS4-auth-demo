import axios from 'axios'

async function getDoughnutsFromApi() {
  const response = await axios.get('https://localhost:5002/doughnuts');
  return response.data;
}

export {
  getDoughnutsFromApi
}
