import axios from "axios";
import url from "./url";

export default {
  add: {
    user: newUser => {
      return axios.post(`${url}/users/add`, newUser).catch(function(error) {
        console.log(error);
      });
    }
  }
};
