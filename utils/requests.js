const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_keys=${API_KEY}&language=en=us`,
  },

  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_keys=${API_KEY}&language=en=us`,
  },

  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=28`,
  },

  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  },

  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  },

  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=10749`,
  },

  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=9648`,
  },

  fetchSciFi: {
    title: "Sci-fi",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=878`,
  },

  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=37`,
  },

  fetchAnimaton: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=16`,
  },

  fetchTV: {
    title: "TV Series",
    url: `/discover/movie?api_key=${API_KEY}&with_geners=10770`,
  },
};
