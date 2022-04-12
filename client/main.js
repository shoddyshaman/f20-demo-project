console.log("connected");

const base_url = "http://localhost:5050";

const searchInput = document.querySelector('#searchMovie')
const searchBtn = document.querySelector('#search-btn')
const displayContainer = document.querySelector('#container-2')

const handleSearch = () => {
    let searchVal = searchInput.value
    axios.get(`${base_url}/api/search?search=${searchVal}`)
    .then(res => {
        console.log(res.data.results)
        res.data.results.map(result => {
            let displayDiv = document.createElement('div')
            displayDiv.innerHTML = `
            <h3>${result.title}</h3>
            <article>${result.overview}</article>`
            displayContainer.appendChild(displayDiv)
        })
    })
    .catch(err => console.log(err))
}

searchBtn.addEventListener('click', handleSearch)