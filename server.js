const express = require('express');
const app = express()
const PORT = 3001

app.use(express.static('public'))

app.get('/quote-list', (req, res) => {
  res.sendFile(__dirname + '/public/assets/quote-list/quote-list.html')
})

app.get('/db/quotes.json', (req, res) => {
  res.sendFile(__dirname + '/db/quotes.json')
})

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`)
})