import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '360268451bmsh78a50ce15f95870p199e69jsn1b07e919f0ab',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await axios.get(url, options);
  const data = await res.data;

  return data;
};
