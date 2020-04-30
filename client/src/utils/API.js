import axios from "axios";
import React from "react";

export default {
  //thinking of this as createItems() to match the action type
  getItems: async function (filter) {
    if (filter) {
      let resArr = await Promise.all(Object.keys(filter[0]).map(async (key) => {

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
      )
      return resArr;
    } else {
      let resArr = []
      let topics = "kitten"
      let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${topics}&count=9&sortby=dat`;

      let config = {
        method: "get",
        url: queryURL,
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        },
      };
      return axios(config).then((res) => {
        resArr.push(res)
        return resArr;
      });
    }
  }
}
