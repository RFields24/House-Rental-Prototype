const { response } = require('express');
const express = require('express');
const app = express();
const router = express.Router()
const PORT = 8000

app.use(express.static(__dirname))

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})