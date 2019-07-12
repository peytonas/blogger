## Blogger


#### Objective:
Students will use node, express, mongoose, controllers, services to create a server that persists data to a database. The goal of this project is to build a blog engine for Blogger, the Blog company! We want to be able to create a blog, get all blogs, get blogs by their title(slug), and get all blogs with a given tag. We also want to be able to get a blog by its id, edit a specific blog by its id or delete that blog based on its id. This project consists solely of the back-end(server) side of the application. The front end will be handled for you. However, you must write your routes to accommodate this functionality on the front-end.

### Functionality
In this project you will be completely responsible for creating and implementing the routes, schema, and database communications. Effectively use the controller and services pattern to pass data or requests to the service. Create the following routes that can interact with the database:

    Create a blog
    Retrieve all blogs
    Retrieve blogs by query for title(slug)
    Retrieve all blogs by query for a tag
    Retrieve a blog by id
    Edit a blog
    Delete a blog

A blog will have:

    {
      title: "The Era of E-Sports" //max length should be 60 characters
      slug: "the-era-of-e-sports" //slug should be unique and lowercase
      summary: "A short description." // no more than 120 characters
      author: "Jim Bob" 
      img: "https://placehold.it"
      body: "A bunch of stuff about E-Sports", 
      tags: ["sports", "tech"]
    }
    
    timestamps: true

### Have fun!
There are a lot of extended challenges and features that can be added to your blog engine. The Blog Company expects this feature set, but they encourage creativity! Some challenges could be allowing adding comments to a blog. Upvoting or downvoting a blog. Retrieving most popular blog by the number of upvotes. You can use both our front end testing tool, and postman to test your server.
