const User = require("../models/use-models");
const Contact = require("../models/contact-model");
const Service = require("../models/service-model");

// *-------------
// getAdminAllUsers Logic
// *-------------
const getAdminAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, { password: 0 });
        if (!users || users.length === 0) {
            res.status(404).json({ message: "No Users Found" });
        }
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
};

// *-------------
// delete Contact Logic
// *-------------
const deleteContactsById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });
        res.status(200).json({ message: "Contacts Deleted Successfullt" });
    } catch (error) {
        next(error)
    }
};

// *-------------
// getAllContacts Logic
// *-------------
const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();
        if (!contacts || contacts.length === 0) {
            res.status(404).json({ message: "No Contacts Found" });
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error)
    }
};

// *-------------
// user delete Logic
// *-------------
const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        res.status(200).json({ message: "User Deleted Successfullt" });
    } catch (error) {
        next(error)
    }
};

// *-------------
// single user Logic
// *-------------
const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
};

// *-------------
// user update Logic
// *-------------
const updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;

        const updatedData = await User.updateOne(
            { _id: id },
            { $set: updatedUserData }
        );
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
};


// *-------------
// getAllService Logic
// *-------------
const getAllService = async (req, res, next) => {
    try {
        const services = await Service.find();
        if (!services || services.length === 0) {
            res.status(404).json({ message: "No Services Found" });
        }
        res.status(200).json(services);
    } catch (error) {
        next(error)
    }
};

// *-------------
// create new service Logic
// *-------------
const createNewData = async (req, res, next) => {
    try {
        const { serviceName, description, price, provider } = req.body;
        if (!serviceName || !description || !price || !provider) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new service
        const newService = new Service({
            serviceName,
            description,
            price,
            provider,
        });

        // Save to database
        const savedService = await newService.save();

        res.status(201).json({ message: "Service added successfully" });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    getAdminAllUsers,
    getAllContacts,
    deleteContactsById,
    getAllService,
    deleteUserById,
    getUserById,
    updateUserById,

    createNewData
};