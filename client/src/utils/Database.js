import axios from "axios";

export default {
  updateQueue: function (queueData) {
    return axios.put("/database/user", queueData);
  },
};
