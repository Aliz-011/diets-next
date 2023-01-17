import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '99ad11b52bmsh83477b524a2266dp1a5cd4jsn08212bb69ce4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await axios.get(url, options);
  const data = await res.data;

  return data;
};
