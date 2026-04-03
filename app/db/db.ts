import mongoose, { Mongoose, Schema } from "mongoose";

const Status = ["pending", "completed", "due"]

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
    {timestamps: true}
)

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    status: { type: String, required: false, enum: Status },
    date: { type: Date, required: true, min: Date.now() + 1 * 60 * 60 * 1000},
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

},
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema);
export const task = mongoose.model("Task", taskSchema);