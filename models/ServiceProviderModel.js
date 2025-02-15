import mongoose from "mongoose";
import { User } from "./UserModel";
import { Service } from "./ServiceModel";

const serviceProviderSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        set: value => parseFloat(value.toFixed(1)),
        required: true
    },
    bio: {
        type: String,
        required: true,
        validate: {
            validator: value => value.trim(),
            message: 'Bio is required'
        }
    },
    experience_years: {
        type: Number,
        min: 1,
        required: true,
        validate: {
            validator: value => value >= 1,
            message: 'Experience should not be less than a year'
        }
    },
    available_status: {
        type: String,
        enum: ['available', 'unavailable'],
        required: true
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

export const ServiceProvider = mongoose.model('serviceProvider', serviceProviderSchema);