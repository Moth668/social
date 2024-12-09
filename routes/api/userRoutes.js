router.route('/')
    .get(getUsers) // GET all users
    .post(createUser); // POST a new user

router.route('/:id')
    .get(getUserById) // GET a single user by ID
    .put(updateUser) // PUT to update a user
    .delete(deleteUser); // DELETE a user and their thoughts

router.route('/:userId/friends/:friendId')
    .post(addFriend) // POST to add a friend
    .delete(removeFriend); // DELETE a friend
