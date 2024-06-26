import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === "" || email === "" || password === "") {
        next(errorHandler(400, "All fields are required!"));
    }

    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword,
    });

    try {
        await newUser.save();
        res.json({ message: "Signup successful!" });
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password || username === "" || password === "") {
        return next(errorHandler(400, "All fields are required for login!"));
    }

    try {
        const validUser = await User.findOne({ username });
        if (!validUser) {
            return next(errorHandler(404, "User not found! l"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, "Wrong credentials! l"));
        }

        const token = jwt.sign({ userId: validUser._id }, process.env.JWT_SECRET);

        const { password: pass, ...rest } = validUser._doc;

        res.status(200)
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .json(rest);
    } catch (error) {
        next(error);
    }
};

export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            res.status(200)
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .json(rest);
        } else {
            const generatePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashPassword = bcryptjs.hashSync(generatePassword, 10);
            const newUser = new User({
                username: name.toLowerCase().split(" ").join(""),
                email,
                password: hashPassword,
                profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password, ...rest } = newUser._doc;
            res.status(200)
                .cookie("access_token", token, {
                    httpOnly: true,
                })
                .json(rest);

            console.log(token);
        }
    } catch (error) {
        next(error);
    }
};
