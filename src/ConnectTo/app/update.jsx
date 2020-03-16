import axios from "axios";
import url from "./url";

export default {
  update: {
    user: (userEmail, data) => {
      return axios
        .post(`${url}/users/update/${userEmail}`, data)
        .catch(function(error) {
          console.log(error);
        });
    },
    password: (userEmail, data) => {
      return axios
        .post(`${url}/users/updatePW/${userEmail}`, data)
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
