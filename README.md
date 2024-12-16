# Module 17 Challenge Social Network API: social 👨‍💻

## Table of Contents

[Task](#task)
[User Story](#user-story)
[Acceptance Criteria](#acceptance-criteria)
[Additional Information](#additional-information)
[API Endpoints](#api-endpoints)
[Notes](#notes)
[Video](#video)
[Repository](#repository)

## Task

My task was to create a social media api program that will use MongoDB so that users can add friends to their friends list, share thoughts with eachother, and react to friends' thoughts.

## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user's friend list

## Additional Information

npm run dev

Use Insomnia to test the API endpoints. The server runs on http://localhost:3001.

## API Endpoints

User Routes
GET /api/users: Get all users.
GET /api/users/:id: Get a single user by ID.
POST /api/users: Create a new user.
PUT /api/users/:id: Update a user by ID.
DELETE /api/users/:id: Delete a user by ID (and associated thoughts).
Thought Routes
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:id: Get a single thought by ID.
POST /api/thoughts: Create a new thought.
PUT /api/thoughts/:id: Update a thought by ID.
DELETE /api/thoughts/:id: Delete a thought by ID.
Friend and Reaction Routes
POST /api/users/:userId/friends/:friendId: Add a friend to a user's list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's list.
POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction by reactionId.

Technologies Used (including but not limited to):

- VS Code
- GitBash
- GitHub
- ChatGPT
- Node.js
- Express.js
- MongoDB
- Compass
- Mongoose ODM
- JavaScript
- Insomnia
- OBS
- Youtube

## 📝 Notes

Make friends, share your thoughts, grow your network!

## 🎥 Video

This link will take you to the video walkthrough of this application: https://www.youtube.com/watch?v=vxfx-BJLFj4

## Repository

This link will take you to my GitHub Repository: https://github.com/Moth668/social
