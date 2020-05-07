import axios from "axios";

export default {
  getItems: async function (filter) {
    let filterNotEmpty = false;
    Object.keys(filter).map((key) => {
      if (filter[key]) {
        filterNotEmpty = true;
      }
      return;
    });

    if (filterNotEmpty) {
      let resArr = await Promise.all(
        Object.keys(filter).map(async (key) => {
          if (filter[key] === true) {
            let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${key}&count=50&sortby=dat`;

            let config = {
              method: "get",
              url: queryURL,
              headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
              },
            };
            let axiosReturn = await axios(config);
            return axiosReturn;
          }
        })
      );

      const filteredResults = resArr.filter((result) => result !== undefined);
      return filteredResults;
    } else {
      let resArr = await Promise.all(
        Object.keys(filter).map(async (key) => {
          let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${key}&count=50&sortby=dat`;

          let config = {
            method: "get",
            url: queryURL,
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
            },
          };
          let axiosReturn = await axios(config);
          return axiosReturn;
        })
      );

      const filteredResults = resArr.filter((result) => result !== undefined);
      return filteredResults;
    }
  },

  registerUser: async (userObject) => {
    let myReturn = {};
    await axios
      .post("/api/users/register", userObject)
      .then((response) => {
        myReturn = response.data;
      })
      .catch((err) => {
        myReturn = err.response;
      });
    return myReturn;
  },

  loginUser: (userObject) => {
    return axios
      .post("/api/users/login", userObject)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });
  },
};
