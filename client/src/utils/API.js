import axios from "axios";
// import router from "../../../routes/api/users";

export default {
  getItems: async function (filter) {
    console.log("call!");
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
        console.log("response from users.js: " + JSON.stringify(response));
        myReturn = response.data;
        console.log("within axios: " + myReturn);
      })
      .catch((err) => {
        console.log("in the catch");
        console.log(err);
        myReturn = err.response;
      });
    console.log("API.js myReturn (register): " + JSON.stringify(myReturn));
    return myReturn;
  },

  loginUser: (userObject) => {
    // let myReturn = "";
    return axios
      .post("/api/users/login", userObject)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log("in the catch");
        console.log(err.response);
        return err;
      });
    // ! this should be full object sending back up to UserSignIn
    // return myReturn;
  },
};
