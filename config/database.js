import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const connectDB = async () => {
    console.log("CONNECTING DB")
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`Mongo DB is connected. ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error}`)
        process.exit(1)
    }
}

export default connectDB