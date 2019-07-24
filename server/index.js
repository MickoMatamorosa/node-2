const express = require('express');

// API Database
const db = require('./Database/db');

// Controllers
const user     = require('./Controllers/User');
const profile  = require('./Controllers/Profile');
const posts    = require('./Controllers/Posts');
const comments = require('./Controllers/Comments');
const debug    = require('./Controllers/debug');

const app = express();

app.use(express.json());
app.set('db', db);

// Users
app.post('/sign-up', user.create);

// Profiles
app.get('/profile', profile.getID);
app.patch('/profile/:userId', profile.update);

// // Posts
app.post('/posts', posts.create);
app.get('/user/:userId/posts', posts.getUserPosts)
app.get('/posts/:postId', posts.getPost)

// // Comments
app.post('/comments', comments.create);

// Debug
app.get('/debug', debug.debugger);

// Listening

const port = 3333;

app.listen(port, () => { 
    console.log(`Server listening on port: ${port}`); 
});