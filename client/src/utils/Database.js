import axios from "axios";

export default {
  updateQueue: function (queueData) {
    return axios.put("/database/user", queueData);
  },
  getUserQueue: function (user) {
    return axios.get("/database/user/" + user);
  },
};
