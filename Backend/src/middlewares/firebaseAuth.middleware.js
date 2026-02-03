import admin from "../utils/firebaseAdmin.js";

const firebaseAuth = async (req,res,next) =>{
    const header = req.headers.Authorization;

    if(!header || !header.startsWith("Bearer ")){
        return res.status(401).json({ message: "No token Found" }); 
    }

    const token = header.split(" ")[1];
    try{
        const decode = await admin.auth().verifyIdToken(token);
        req.user = decode;
        next();
    }catch(error){
        return res.status(401).json({message: "Invalid token"});
    }
};

export default firebaseAuth;