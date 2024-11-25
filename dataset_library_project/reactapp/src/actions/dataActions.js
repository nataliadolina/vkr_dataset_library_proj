import {API_URL, API_URL_STATUSES} from "./../index";
import axios from "axios";

export const getDatasets = (statuses, substatuses) => dispatch => {
    axios.get(API_URL,
      {
        params: {
          "statuses": statuses.join(','),
          "substatuses": substatuses.join(',')
        }
      }).then(function(response) {
        return response.data
      }).
      then(data => dispatch({ type: 'datasets/GET_ALL', payload: data }));
  };

export const getStatuses = () => dispatch => {
  axios.get(API_URL_STATUSES).then(function(response) {
      return response.data
    }).
    then(data => dispatch({ type: 'statuses/GET_ALL', payload: data }));
};  