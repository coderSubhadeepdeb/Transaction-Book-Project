import { Borrow } from "../models/borrow.model.js";
import crypto from "crypto";

const addBorrowData = async(req,res)=>{
    const {uid, email} = req.user;
    const {
        lenderName,
        amount,
        lenderContactNumber,
        lenderUpiId,
        description,
        expectedReturnDay,
        setReminder,
        reminderPeriod
    } = req.body;

    const txnId = crypto.randomUUID();

    try{
        const borrowItem = await Borrow.findOne({borrowTransacId: txnId});
        if(!borrowItem){
            const borrow = await Borrow.create({
                userId: uid,
                borrowTransacId: txnId,
                lenderName,
                amount,
                lenderContactNumber,
                lenderUpiId,
                description,
                expectedReturnDay,
                setReminder,
                reminderPeriod
            });

            return res.status(200).json({
                success: true,
                message: " Added to the borrow list!",
                data: borrow
            });
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

export default addBorrowData;