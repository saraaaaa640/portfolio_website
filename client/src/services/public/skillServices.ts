
import api from './../api';

export const getSkills = async () => {
  const res = await api.get('/skills');
  return res.data;
};
