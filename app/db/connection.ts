import mongoose from 'mongoose';
import 'dotenv/config'

export const connectDb = async () => {
    try {
        if(!process.env.DATABASE_URL) {
            throw new Error("Invalid URL")
        }
        
        mongoose.connect(process.env.DATABASE_URL);
    }
    catch(err) {
        throw err;
    }
}
