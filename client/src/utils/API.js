import axios from "axios";

export default {
  getItems: async function (filter) {
    console.log("call!");
    let filterNotEmpty = false;
    Object.keys(filter).map((key) => {
      if (filter[key]) {
        filterNotEmpty = true;
      }
    });

    if (filterNotEmpty) {
      let resArr = await Promise.all(
        Object.keys(filter).map(async (key) => {
          if (filter[key] === true) {
            let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${key}&count=9&sortby=dat`;

        if (filter[key] === true) {

          let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${key}&count=9&sortby=dat`;

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
          let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${key}&count=9&sortby=dat`;

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
};
