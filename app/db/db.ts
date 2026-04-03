import mongoose, { Mongoose, Schema } from "mongoose";

const Status = ["PENDING", "COMPLETED", "DUE"]

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
    { timestamps: true }
)

const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: false, enum: Status, default: "PENDING" },
    completeBy: {
        type: Date,
        required: true,
        validate: {
            validator: function (value: Date) {
                return value.getTime() >= Date.now() + 60 * 60 * 1000;
            }
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    }

},
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema);
export const Task = mongoose.model("Task", taskSchema);