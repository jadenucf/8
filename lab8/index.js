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

// get all posts
app.get("/posts", async (req, res) => {
  const data = await fetch(basket)
  const newData = await data.json()
  res.send(newData)

  console.log(newData.posts)
})

// get posts by author
app.get("/posts/author/:author", async (req, res) => {
  const author = req.params.author
  const data = await fetch(basket)
  const newData = await data.json()

  const filteredPosts = newData.posts.filter((posts) => posts.author === author)

  res.send(filteredPosts)
})
// get posts by postID
app.get("/posts/author/:postID", async (req, res) => {
  const author = req.params.postID
  const data = await fetch(basket)
  const newData = await data.json()

  const filteredPosts = newData.posts.filter((posts) => posts.author === postID)

  res.send(filteredPosts)
})

// post a post