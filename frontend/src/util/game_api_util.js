import axios from 'axios';

export const getGame = league => {
  return axios.get(`/api/games/${league}`);
}
