const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
let loginUser = async (req, res) => {
    const userData = await req.body;
    try {
        console.log(userData);
        const user = await User.findOne({ email: userData.email });
        console.log(user._id);
        if (!user) {
            return res.json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(userData.password, user.password);
        if (!isPasswordValid) {
            return res.json({ message: "Invalid password" });
        } else {
            const token = await jwt.sign(
                { userID : user._id, name: user.name , tasks: user.tasks },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
            );
            await res.cookie("jwt", token, {
            });
            res.json({ message: "Login successful"});
        }
    } catch (err) {
        console.error("Error logging in user:", err);
        res.json({ message: "Server error" + err});
    }
};

let getUserData = async (req, res) => {
    const user = req.user;
    try {
        res.json(user);
    } catch (err) {
        res.json({ message: "Server error" + err});
    }
}

module.exports = {loginUser, getUserData};
