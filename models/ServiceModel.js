import mongoose from "mongoose";
import { ServiceCategory } from "./ServiceCategoryModel";

const serviceSchema = mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceCategory',
        required: true
    },
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
    base_price: {
        type: Number,
        required: true,
        set: value => parseFloat(value.toFixed(2)),
        min: 0
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

export const Service = mongoose.model('service', serviceSchema);