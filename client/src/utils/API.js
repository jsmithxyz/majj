import axios from "axios";

export default {
  //thinking of this as createQueue() to match the action type
  getQueue: function (topics) {
    //for now, just hardcoded for it to return 50 results
    let queryURL = `https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search?q=${topics}&count=50&sortby=dat`;

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
