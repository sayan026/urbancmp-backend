import mongoose from "mongoose";

const citySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: value => value.trim(),
            message: 'Name is required'
        }
    }
});

export const City = mongoose.model('city', citySchema);