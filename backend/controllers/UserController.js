import User from "../models/UserModel.js";

// get list
export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get by id
export const getUserById = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// post 
export const saveUser = async (req, res) => {
    const user = new User(req.body);
    try {
        const insertedUser = await user.save();
        res.status(201).json(insertedUser); // status created at
    } catch (error) {
        res.status(400).json({ message: error.message }); // status kesalahan user
    }
}

// edit 
export const updateUser = async (req, res) => {
    try {
        const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete
export const deleteUser = async (req, res) => {
    try {
        const userDelete = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(userDelete);
    } catch (error) {
        res.status(400).json({ message: error.message }); // status kesalahan user
    }
}