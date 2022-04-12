require("dotenv").config();
const axios = require("axios");
const { TMDB_API_KEY } = process.env;

module.exports = {
  searchMovie: (req, res) => {
    const { search } = req.query;
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${search}`
      )
      .then((response) => {
        console.log(res.data);
        res.status(200).send(response.data);
      })
      .catch((err) => console.log(err));
  },
};
