import axios from "axios";
import url from "./url";

export default {
  login: userData => {
    return axios
      .get(`${url}/users/login/${userData.email}/${userData.password}`)
      .catch(function(error) {
        console.log(error);
      });
  },
  find: {
    user: {
      byEmail: userEmail => {
        return axios
          .get(`${url}/users/find/${userEmail}`)
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
