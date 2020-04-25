import axios from "axios";
import React from "react";

export default {
  //thinking of this as createQueue() to match the action type
  getQueue: function (filter) {
    //for now, just hardcoded for it to return 50 results
    console.log(`filter:`);
    console.log(filter);
    if (filter) {
      Object.keys(filter[0]).map((key) => {
        // console.log(key);
        let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${key}&count=2&sortby=dat`;

        let config = {
          method: "get",
          url: queryURL,
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          },
        };

        //returns full response, so we can whittle it down as we like
        return axios(config).then((res) => {
          return res;
        });
      });
    } else {
      let topics = "animals";
      let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${topics}&count=3&sortby=dat`;

      let config = {
        method: "get",
        url: queryURL,
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        },
      };
      return axios(config).then((res) => {
        return res;
      });
    }

    //returns full response, so we can whittle it down as we like
  },
};
