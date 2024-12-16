import { User, Thought } from '../models/index.js';

    export const getUsers = async (req, res) => {
        try {
            const users = await User.find(); // Fetch all users
            res.json(users); // Send back the user data
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    
    export const getUserById = async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('thoughts').populate('friends');
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    export const createUser = async (req, res) => {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    export const updateUser = async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    export const deleteUser = async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            // Remove associated thoughts
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: 'User and associated thoughts deleted' });
        } catch (err) {
            res.status(500).json(err);
        }
    }
    export const addFriend = async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    export const removeFriend = async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(
                req.params.userId,
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
