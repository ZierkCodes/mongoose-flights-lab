import mongoose from 'mongoose'

export { Airport }

const Schema = mongoose.Schema

const airportSchema = new Schema({
    airport: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const Airport = mongoose.model('Airport', airportSchema)