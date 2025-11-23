import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const getImagesByQuery = async (query, page = 1) => {
  const { data } = await axios.get(
    `?key=41227446-81114c3a771220f4777577230&q=${query.split(' ').join('+')}`,
    {
      params: {
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    }
  );

  return data;
};

export default getImagesByQuery;
