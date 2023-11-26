const quotes = require('./db/quotes.json');
const express = require('express');
const fs = require('fs').promises;
const app = express()
const PORT = 3001

app.use(express.static('public'))
app.use(express.json())

app.get('/quote-list', (req, res) => {
  res.sendFile(__dirname + '/public/assets/quote-list/quote-list.html')
})

app.get('/db/quotes.json', (req, res) => {
  res.sendFile(__dirname + '/db/quotes.json')
})

app.get('/quote-form', (req, res) => {
  res.sendFile(__dirname + '/public/assets/quote-form.html')
})

app.post('/quote-form', async (req, res) => {
  const data = await req.body
  quotes.quotes.push(data.data)
  fs.writeFile('./db/quotes.json', JSON.stringify({ quotes: quotes.quotes }))
  res.send(console.log('Quote added'))
})


app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`)
})