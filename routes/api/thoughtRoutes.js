router.route('/')
    .get(getThoughts) // GET all thoughts
    .post(createThought); // POST a new thought

router.route('/:id')
    .get(getThoughtById) // GET a single thought by ID
    .put(updateThought) // PUT to update a thought
    .delete(deleteThought); // DELETE a thought

router.route('/:thoughtId/reactions')
    .post(addReaction) // POST a reaction to a thought
    .delete('/:reactionId', removeReaction); // DELETE a reaction by reactionId
