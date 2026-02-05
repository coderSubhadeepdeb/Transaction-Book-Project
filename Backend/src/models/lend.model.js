import mongoose from "mongoose";

const lendSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        trim: true
    },
    lendTransacId:{
        type: Number,
        required: true,
        unique: true
    },
    borrowerName: {
        type: String,
        required: true,
        trim: true
    },
    amount:{
        type: Number,
        required: true,
        trim: true
    },
    borrowerEmail:{
        type: String,
        required: true,
        trim: true
    },
    borrowerContactNumber:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type : String,
    },
    expectedReturnDays: {
        type: Number,
        required: true
    },
    setReminderForBorrower:{
        type: Boolean,
        default: false
    },
    setReminderForYou:{
        type: Boolean,
        default: false
    },
    reminderPeriod:{
        type: Number,
        default: 0
    },
    reminderIntervalUnit: {
      type: String,
      enum: ["minutes", "hours", "days"]
    },
    nextReminderAt: Date
},{
    timestamps: true
});

export const Lend = mongoose.model("Lend", lendSchema);