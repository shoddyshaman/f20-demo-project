const toDo = [
  {
    id: 1,
    task: "Take out dog for a walk",
  },
  {
    id: 2,
    task: "Make a smoothie",
  },
  {
    id: 3,
    task: "Do some code review",
  },
  {
    id: 4,
    task: "GO to the gym",
  },
];

let globalId = 5;

module.exports = {
  getAllItems: (req, res) => {
    res.status(200).send(toDo);
  },
  createItem: (req, res) => {
    const { task } = req.body;
    const newItem = {
      id: globalId,
      task,
    };
    toDo.push(newItem);
    globalId++;
    res.status(200).send(toDo);
  },
  updateItem: (req, res) => {
    const { id } = req.params;
    const { newTask } = req.body;
    const index = toDo.findIndex((item) => item.id === +id);
    // console.log(toDo[index])
    toDo[index].task = newTask;
    res.status(200).send(toDo);
  },
  deleteItem: (req, res) => {
    //   console.log('hit')
    const { id } = req.params;
    // console.log(id)
    const index = toDo.findIndex((item) => item.id === +id);
    toDo.splice(index, 1);
    res.status(200).send(toDo);
  },
};
