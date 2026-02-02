import mongoose , {Schema} from "mongoose";

const borrowSchema = new Schema({
        borrowTransacId:{
            type: Number,
            required: true,
            unique: true
        },
        lenderName : {
            type: String,
            required: true,
            trim: true
        },
        amount:{
            type: Number,
            required: true,
            trim: true
        },
        lenderEmail:{
            type: String,
            trim: true
        },
        lenderContactNumber:{
            type: String,
            required: true,
            trim: true
        },
        lenderUpiId:{
            type: String,
            trim: true
        },
        description:{
            type: String
        },
        expectedReturnDay:{
            type: Number,
            required: true,
            trim: true
        },
        setReminder:{
            type: Boolean,
            default: false
        },
        reminderPeriod:{
            type: Number,
            default: 0
        }
    },{

        timestamps: true

    });


export const Borrow = mongoose.model("Borrow", borrowSchema);
