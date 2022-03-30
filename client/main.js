console.log("connected");
const listContainer = document.querySelector('.list-container')

const base_url = "http://localhost:5050";

const getToDos = () => {
  axios
    .get(`${base_url}/api/todo`)
    .then((res) => {
        console.log(res.data)
        let unoList = document.createElement('ul')
        res.data.map(item => {
            let listElement = document.createElement('li')
            listElement.textContent = item.task
            unoList.appendChild(listElement)
        })
        listContainer.appendChild(unoList)
    })
    .catch((err) => console.log(err));
};

window.addEventListener("DOMContentLoaded", getToDos);
