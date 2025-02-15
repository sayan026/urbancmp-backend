import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: 'UrbanClap'
    })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(`DB Connection failed : ${process.env.MONGO_URL} | ${err}`))
}