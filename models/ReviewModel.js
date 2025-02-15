import mongoose from "mongoose";
import { User } from "./UserModel";
import { ServiceProvider } from "./ServiceProviderModel";

const reviewSchema = mongoose.Schema({
    customer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        set: value => parseFloat(value.toFixed(1)),
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

export const review = mongoose.model('review', reviewSchema);