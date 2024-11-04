export const fetchImages = query => {
  const API_KEY = '46892325-00c25f1fa799ccb760ac92d85';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const URL = `https://pixabay.com/api/?${params.toString()}`;

  return fetch(URL)
    .then(response => {
      console.log(response);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error('Error fetching data:', error);
      return [];
    });
};
