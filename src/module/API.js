const url = 'https://api.tvmaze.com/schedule/full';

const getItemsList = async () => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();

  return data;
};

export default { getItemsList };
