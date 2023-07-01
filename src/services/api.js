import axios from 'axios';

const KEY = '36528050-c337b07b2d3bf2b7045a27ee1';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get('', {
    params: {
      q: query,
      key: KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      page: page,
      per_page: 12,
    },
  });

  const hits = response.data.hits.map(
    ({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    })
  );

  return { hits, totalHits: response.data.totalHits };
};
