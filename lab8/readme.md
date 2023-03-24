# Briefing:

This lab is a another rework of the the similar syntax structure as Project 2. In fact, you can even use it as the foundation for the script you need to write for this assignment. I have provided you with an updated .json file structure, which will be necessary when working with the small scale free data storage service; Pantry. This service is required to be utilized for this assignment and because of that the .json structure, we have worked with before, needs a little updating for it to save on the site in the basket you create. This mainly requires that your list of objects must be in a named property array; e.g. "posts". The other key component is the utilization of node-fetch, which will GET and POST data to the Pantry server basket. You may need to install this node module at the root level of the repository workspace to get it to work; see the install instructions in the linked API. Lastly, you are still going to use Express to make the "function calls" that run your script through Postman. The JSON file structure below is the "lab8posts_backUp.json" already in the lab8 folder, for your convince, along with an "info.txt" file to save your basket URI. You need to do your work in the "lab8.js" file.

# Requirements:
## Updated JSON File Structure -

You are going to need to fill in all the values, as they are nor properly formatted in the template. Also, you should create one or two more objects before saving it to your Pantry basket.

{
  "posts": [
    {
      "title": string,
      "date": dateTime,
      "postId": pID1,
      "author": string,
      "comments": [
        {
          "author": string,
          "date": dateTime,
          "commentId": cID1,
          "content": string
        },
        {
          "author": string,
          "date": dateTime,
          "commentId": cID2,
          "content": string
        }
      ],
      "content": string
    },
    {
      "title": string,
      "date": dateTime,
      "postId": pID2,
      "author": string,
      "comments": [
        {
          "author": string,
          "date": dateTime,
          "commentId": cID1,
          "content": string
        },
        {
          "author": string,
          "date": dateTime,
          "commentId": cID2,
          "content": string
        }
      ],
      "content": string
    }
  ]
}


Every postId and commentId are strings without spaces. They can be numbers only or strings with numbers. Every author is a string without spaces, representing usernames. The posts should be stored as an array in the Pantry basket, and every time the posts are changed, the basket should be updated with the latest content. Further, for each request, the basket should be read (asynchronously) so that any changes made will properly POST to the server. Each postId and commentId should be assigned a unique ID (a string). You can use any method to come up with an ID, but it should be unique. Consider a global number of posts or number of comments. Comment IDs should be unique to the post, not necessarily globally.

Your application should handle the following routes, each of which should be demonstrated using Postman in the video:

GET /posts - Returns an array of posts
GET /post/author/:author - Returns an array of posts by a given author
GET /post/postId/:postId - Retrieves a single post object
POST /post - Accepts a JSON object as the body of the request, this doesn't need comment values
DELETE /post/:postId - Removes the post from the array
GET /post/:postId/comments - Returns all comments associated with a post
POST /post/:postId/comment - Adds a comment to the end of the post and returns an ID
DELETE /post/:postId/comment/:commentId - Deletes the comment with the provided id

# Submission:

You should test your application by using Postman and demonstrate each route working in a short video; around 3 minutes. You must show your Pantry basket has updated after every POST or DELETE call, even if you show the response in Postman. To do this click the "Dashboard" board navigation button on the site and click the relevant basket.