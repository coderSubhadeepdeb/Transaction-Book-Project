import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    userName:{
        type: String,
        required: true,
        trim: true
    },
    userEmail:{
        type: String,
        required: true,
        trim: true
    },
    userContact:{
        type: Number,
        required: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    occupation:{
        type: String,
        trim: true
    },
    organisation:{
        type: String,
        trim: true
    }
},{
    timestamps: true
});

export const User = mongoose.model("User", userSchema);