import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected',()=>{
            console.log("Db connected");
        })
        await mongoose.connect(`${process.env.MONGODB_URI}/smartblog`)
    }
    catch (err) {
        console.error(err.message);
    }
};


export default connectDB;