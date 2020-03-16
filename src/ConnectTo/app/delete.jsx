import axios from "axios";
import url from "./url";

export default {
  delete: {
    user: {
      all: () => {
        return axios.delete(`${url}/users/deleteall`).catch(function(error) {
          console.log(error);
        });
      },
      one: userEmail => {
        return axios
          .delete(`${url}/users/delete/${userEmail}`)
          .catch(function(error) {
            console.log(error);
          });
      }
    }
  }
};
