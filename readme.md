# REST

Representational State Transfer, or REST, is a set of architectural constraints which defines web services as lightweight, scalable, and stateless. API developers can implement REST in a variety of ways. When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or endpoint. Using HTTP methods, like GET/POST/DELETE/etc., it can transfer requests and responses relating to snippets of data, which avoids sending entire web pages. For example, it can allow a single data object to be retrieved by different platforms, which may be displayed differently depending on the platform's needs.

## Learning Objectives

- Understand and describe the six constraints of REST
- Navigate an existing API
- Utilize Fetch with Express and Postman to update a database

# Lesson 8-1 Introduction to REST

In this lesson you will be pulling from the <strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%3Ftrk%3Dshare_ent_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">Learning REST APIs</a></strong> LinkedIn Learning course. Not every video will be linked here, so you may want to review the course in its entirety to get a better understanding.

## Unsderstanding REST APIs

The key to understanding REST APIs is that it is not a technology, but rather a methodology. It utilizies existing technologies and allows for predictable and consistent ways to retireve data from APIs. There are also 6 contraints of REST that are required to be followed in order for something to be a REST API. On top of that, a REST API that uses HTTP protocol while following those 6 contraints is considered RESTful.

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fwhat-is-a-rest-api%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D"></a>What is REST API?</strong>

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fthe-six-constraints-of-rest%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">The six contraints of REST</a></strong>


## Extendned URLs

We are mostly faimilar with URLs, but a URI is an extended version of it as it includes a specific resource that exists on the page.

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fsidebar-url-vs-uri%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">Sidebar: URL vs. URI</a></strong>

## REST Structure

Like with Express, REST uses the HTTP verbs to along with a URI path to GET or POST the resource you want. However, since these structures were created by someone else and it exists publicly for you to use, it is likely that you'll need to learn how format requests to fit your needs. Discovery can be done with the OPTIONS request, which will show you different properties you can query to filter requests from their default settings.

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fdiscovery%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">Discovery</a></strong>

### REST Verbs

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fget%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">GET</a></strong>

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fpost%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">POST</a></strong>

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fput-patch%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">PUT/PATCH</a></strong>

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fdelete%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">DELETE</a></strong>

## HTTP Status

Learning these messages will help you to better troubleshoot requests that don't operate as intended.

<strong><a href="https://www.linkedin.com/learning-login/share?account=57691257&forceAccount=false&redirect=https%3A%2F%2Fwww.linkedin.com%2Flearning%2Flearning-rest-apis%2Fhttp-status-messages%3Ftrk%3Dshare_video_url%26shareId%3DXOPSDY8mSZmFFbe65na1ig%253D%253D">HTTP status messages</a></strong>