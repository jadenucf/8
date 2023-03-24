// Imports
import express from "express"
import fetch from "node-fetch"
import bodyParser from "body-parser"

// Variables
const app = express()
const PORT = 3000
const basket = 'https://getpantry.cloud/apiv1/pantry/6c28daa9-d36b-4240-847c-ad9184187284/basket/basket1'

// Listening on the PORT
app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}.`)
})

// use body-parser
app.use(bodyParser.json())

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
app.get("/posts/:postID", async (req, res) => {
  const data = await fetch(basket)
  const newData = await data.json()

  //finds the specific postID then shares the post
  const getId = Number(req.params.postID)

  let id = newData.posts.filter((post) => post.postId === getId)

  res.send(...id)
})

// post a post
app.post("/posts", async (req, res) => {

  const data = await fetch(basket)
  const newData = await data.json()

  const item = req.body
  console.log(item)
  
  newData.posts.push(item)
  
  let gData 
 try {
    gData = await fetch (basket, {
      method: "POST",
      body: JSON.stringify(newData),
      headers: { "Content-Type": "applications/json"}
    })
 } catch (error){
  console.log(error)
 }

  res.json(newData)
})

// delete posts by postID
app.delete("/posts/:postID", async (req, res) => {
  const data = await fetch(basket)
  const newData = await data.json()

  //finds the specific postID then shares the post
  const getId = Number(req.params.postID)

  let id = newData.posts.filter((post) => post.postId === getId)

  let index = newData.posts.findIndex((post) => post.postId === getId)

  newData.posts.splice(index, 1)
  res.send(newData)
})

// GET /post/:postId/comments - Returns all comments associated with a post


// get posts by postID
app.get("/posts/:postID/comments", async (req, res) => {
  const data = await fetch(basket)
  const newData = await data.json()

  //finds the specific postID then shares the post
  const getId = Number(req.params.postID)

  // return an array of the post (it should only return one specific item)
  let id = newData.posts.filter((post) => post.postId === getId)
  const  [ item ] = id
  res.send(item.comments)
})