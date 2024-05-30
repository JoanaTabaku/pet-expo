// src/api/apiService.js
const BASE_URL = 'https://freetestapi.com/api/v1';

export const fetchData = async (endpoint) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchBirds = () => fetchData('birds');

export const fetchBirdById = (id) => fetchData(`birds/${id}`);
