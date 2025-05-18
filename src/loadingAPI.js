import axios from "axios";

export function getFilms(requestFor = "trends", request = "") {
  //   const API_KEY = import.meta.env.VITE_THEMOVIEDB_API_KEY;
  const USERNAME = import.meta.env.VITE_THEMOVIEDB_USERNAME;
  const AUTH_TOKEN = import.meta.env.VITE_THEMOVIEDB_AUTH_TOKEN;

  axios.defaults.baseURL = "https://api.themoviedb.org/3";
  axios.defaults.headers.common["accept"] = "application/json";
  axios.defaults.headers.common["Authorization"] = `${USERNAME} ${AUTH_TOKEN}`;

  const endpoints = {
    trends: "/trending/movie/day",
    search: "/search/movie",
    details: `/movie/${request}`,
    cast: `/movie/${request}/credits`,
    reviews: `/movie/${request}/reviews`,
  };

  const param = new URLSearchParams({
    // language: "uk-UA",
    // language: "en-US",
    query: encodeURIComponent(request),
    // page: page,
    // per_page: "10",
  });
  const slug = endpoints[requestFor];
  const URL = `${slug}?${param}`;

  return axios.get(URL).then((response) => {
    // console.log("response:", response.data);
    switch (requestFor) {
      case "cast":
        return response.data.cast;
      case "details":
        return response.data;
      default:
        return response.data.results;
    }
  });
}
