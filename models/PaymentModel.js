import mongoose from "mongoose";
import { Booking } from "./BookingModel";

const paymentSchema = mongoose.Schema({
    booking_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true
    },
    payment_method: {
        type: String,
        enum: ['card', 'netbanking', 'wallet', 'UPI'],
        required: true
    },
    payment_status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        required: true
    },
    amount: {
        type: Number,
        set: value => parseFloat(value.toFixed(2)),
        min: 1
    },
    payment_date: {
        type: Date,
        required: true,
        default: new Date().toLocaleDateString()
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

export const Payment = mongoose.model('payment', paymentSchema);