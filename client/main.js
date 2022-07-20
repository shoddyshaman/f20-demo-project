console.log("connected");

const base_url = "http://localhost:5050";

const searchInput = document.querySelector("#searchMovie");
const searchForm = document.querySelector("#search-form");
const displayContainer = document.querySelector("#container-2");

let movieCounter = 0;

const addToList = (result) => {
  console.log(result);
};

const handleSearch = (e) => {
  e.preventDefault()
  let searchVal = searchInput.value;
  axios
    .get(`${base_url}/api/search?search=${searchVal}`)
    .then((res) => {
      console.log(res.data.results);
      displayContainer.innerHTML = ``;
      searchInput.value = ``;
      res.data.results.map((result) => {
        let displayDiv = document.createElement("div");
        displayDiv.classList.add("card");
        displayDiv.style.width = "18rem";
        let resultObj = JSON.stringify({ ...result });
        // console.log(resultObj);
        displayDiv.innerHTML = `
            <img src='https://image.tmdb.org/t/p/w500/${result.poster_path}' class="card-img-top" alt="movie-poster">
            <div class='card-body bg-light '>
            <h3 class='card-title'>${result.title}</h3>
            <p class='card-text overflow-hidden'>${result.overview}</p>
            <button id="add-watchlist" class="btn btn-primary" onclick='addToList(${resultObj})'>Add to watchlist</button>
            </div>  `;
        displayContainer.appendChild(displayDiv);
      });
    })
    .catch((err) => console.log(err));
};

searchForm.addEventListener("submit", handleSearch);
