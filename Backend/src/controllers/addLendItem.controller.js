import admin from "../utils/firebaseAdmin.js";
import { Lend } from "../models/lend.model.js";
import crypto from "crypto";
import reminderUnitReturnVal from "../utils/reminderUnitVal.js";

const addLendData = async (req, res) =>{
    const {uid, email} = req.user;
    const {borrowerName,amount,borrowerEmail,borrowerContactNumber,description,expectedReturnDays,setReminderForBorrower,setReminderForYou,reminderPeriod,reminderIntervalUnit} = req.body;

    const txnId = crypto.randomUUID();

    try{
        const lendItem = await Lend.findOne({lendTransacId: txnId});
        let nextReminderAt = null;

        if (setReminderForBorrower) {
            const ms = reminderUnitReturnVal(
            reminderIntervalUnit,
            reminderPeriod
            );

            nextReminderAt = new Date(Date.now() + ms);
        }

        if(!lendItem){
            const lend = await Lend.create({
                userId: uid,
                lendTransacId: txnId,
                borrowerName,
                amount,
                borrowerEmail,
                borrowerContactNumber,
                description,
                expectedReturnDays,
                setReminderForBorrower,
                setReminderForYou,
                reminderPeriod,
                reminderIntervalUnit,
                nextReminderAt
            });

            return res.status(200).json({
                success: true,
                message: "Lend Item added successfully!",
                data: lend
            })
        }else{
            return res.status(401).json({
                success: false,
                message: "Txn Id already exist"
            });
        }
    }catch(err){
        return res.status(401).json({
            success: false,
            message: "Error occured while adding the lend item!"
        });
    }
};

export default addLendData;