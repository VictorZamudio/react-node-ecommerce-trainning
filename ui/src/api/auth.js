import axios from 'axios';
import { API_URL } from '../config';

/**
 * Sign up for new user
 * @param {Object} signupData
 * @return Signed user object
 */
function signUp(signupData) {
  return axios
    .post(`${API_URL}/signup`, signupData)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response.data;
    });
}

export { signUp };