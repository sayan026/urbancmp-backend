import mongoose from "mongoose";

const serviceCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => value.trim(),
            message: 'Name is required'
        }
    },
    description: {
        type: String,
        required: true,
        validate: {
            validator: value => value.trim(),
            message: 'Description is required'
        }
    },
    created_at: {
        type: Date,
        required: true,
        default: new Date().toLocaleDateString()
    },
    updated_at: {
        type: Date
    },
    deleted_at: {
        type: Date
    }
});

export const ServiceCategory = mongoose.model('serviceCategory', serviceCategorySchema);