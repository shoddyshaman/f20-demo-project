const express = require('express')
const cors = require('cors')
// const { getAllItems, createItem, updateItem, deleteItem} = require('./controller/listController')
const { searchMovie } = require('./controller/movieController')
const app = express()

//top-level middleware
app.use(express.json())
app.use(cors())

// app.get('/api/todo', getAllItems)
// app.post('/api/todo', createItem)   
// app.put('/api/todo/:id', updateItem)
// app.delete('/api/todo/:id', deleteItem)

//external api endppoints
app.get('/api/search',searchMovie)

//internal endpoints

app.listen(5050, () => console.log(`listening on 5050`))



