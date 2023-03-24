// Imports
import express from "express"
import fetch from "node-fetch"
import posts from "./lab8posts_backUp.json" assert {type: 'json'}

// Variables
const app = express()
const PORT = 3000
const basket = 'https://getpantry.cloud/apiv1/pantry/6c28daa9-d36b-4240-847c-ad9184187284/basket/basket1'

// Listening on the PORT
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`)
})



// Add your routes below:


app.get("/posts", async (req, res) => {
  const data = await fetch(basket)
  const newData = await data.json()
  res.send(newData)
})
