import mongoose from "mongoose";

class DBconnection{
    async connection(params) {
        try {
            await mongoose.connect(process.env.database_url);
            console.log(`DB connected successfully`);
        } catch (error) {
            console.log(`db connection failed ${error.message}`);
        }
    }
}

export default new DBconnection();