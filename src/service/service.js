import axios from 'axios';
const BASE_URL = 'http://localhost:3001'

export const API = {
  GetData: () => {
    return axios.get(BASE_URL + `/api/tournament/getTournamentTeamsList`)
      .then(res => res.data
      ).catch(error => {
        throw error;
      });
  },
};