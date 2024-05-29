import axios from 'axios';

const URL = import.meta.env.API_URL || 'https://compos.net.br/backend/spreadsheet';

export const getNotices = async () => {
  const { data } = await axios.get(`${URL}/getNotices`);
  return data;
};

export const getStatistics = async () => {
  const { data } = await axios.get(`${URL}/getStatistics`);
  return data;
};
