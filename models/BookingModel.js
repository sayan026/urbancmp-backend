import mongoose from "mongoose";
import { User } from "./UserModel";
import { ServiceProvider } from "./ServiceProviderModel";
import { Service } from "./ServiceModel";

const bookingSchema = mongoose.Schema({
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
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    booking_date: {
        type: Date,
        default: new Date().toLocaleDateString(),
        required: true
    },
    booking_time: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'canceled'],
        required: true
    },
    total_amount: {
        type: Number,
        set: value => parseFloat(value.toFixed(2)),
        min: 1
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

export const Booking = mongoose.model('booking', bookingSchema);