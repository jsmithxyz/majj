import axios from "axios";

export default {
  getData: function (query) {
    //for now, just hardcoded for it to return 50 results
    let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${query}&count=50&sortby=dat`;

    const config = {
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
  },
};
