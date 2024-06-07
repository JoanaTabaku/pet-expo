const BASE_URL = 'https://freetestapi.com/api/v1';

export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchBirds = (query = '') => {
  const searchQuery = query ? `&search=${query}` : '';
  return fetchData(`birds?${searchQuery}`);
};

export const fetchBirdById = (id) => fetchData(`birds/${id}`);

export const fetchCats = (query = '') => {
  const searchQuery = query ? `&search=${query}` : '';
  return fetchData(`cats?${searchQuery}`);
};

export const fetchCatById = (id) => fetchData(`cats/${id}`);

export const fetchDogs = async (query = '') => {
  const searchQuery = query ? `&search=${query}` : '';
  return fetchData(`dogs?${searchQuery}`);
};

export const fetchDogById = (id) => fetchData(`dogs/${id}`);

export const fetchDogCount = async (query = '') => {
  const dogs = await fetchDogs(query); // Fetch dogs without pagination
  return dogs.length;
};
