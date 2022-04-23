const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const getItemsList = async () => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();
  return data;
};


getItemsList();
export default { getItemsList };

