import mongoose from "mongoose";

const promotionSchema = mongoose.Schema({
    promo_code: {
        type: String,
        required: true,
        validate: {
            validator: value => value.trim(),
            message: 'Please put promo code'
        }
    },
    description: {
        type: String
    },
    discount_type: {
        type: String,
        enum: ['percentage', 'fixed'],
        required: true
    },
    discount_value: {
        type: Number,
        set: value => parseFloat(value.toFixed(2)),
        required: true
    },
    max_discount: {
        type: Number,
        set: value => parseFloat(value.toFixed(2))
    },
    start_date: {
        type: Date,
        min: new Date().toLocaleDateString()
    },
    end_date: {
        type: Date,
        min: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString()
    },
    usage_limit: {
        type: Number,
        min: 1,
        max: 10,
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

export const promotion = mongoose.model('Promotion', promotionSchema);