import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: { type: String, required: true },
        profilePicture: {
            type: String,
            default:
                "https://img.freepik.com/premium-vector/female-user-profile-avatar-is-woman-character-screen-saver-with-emotions_505620-617.jpg",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
