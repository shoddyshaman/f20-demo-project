console.log("connected");

const base_url = "http://localhost:5050";

const searchInput = document.querySelector("#searchMovie");
const searchBtn = document.querySelector("#search-btn");
const displayContainer = document.querySelector("#container-2");

const handleSearch = () => {
  let searchVal = searchInput.value;
  axios
    .get(`${base_url}/api/search?search=${searchVal}`)
    .then((res) => {
      console.log(res.data.results);
      displayContainer.innerHTML = ``;
      searchInput.value = ``
      res.data.results.map((result) => {
        let displayDiv = document.createElement("div");
        displayDiv.classList.add("card");
        displayDiv.style.width = "18rem";
        displayDiv.innerHTML = `
            <img src='https://image.tmdb.org/t/p/w500/${result.poster_path}' class="card-img-top" alt="...">
            <div class='card-body bg-light '>
            <h3 class='card-title'>${result.title}</h3>
            <p class='card-text overflow-hidden'>${result.overview}</p>
            <a href="#" class="btn btn-primary">Add to watchlist</a>
            </div>  `;
        displayContainer.appendChild(displayDiv);
      });
    })
    .catch((err) => console.log(err));
};

searchBtn.addEventListener("click", handleSearch);
