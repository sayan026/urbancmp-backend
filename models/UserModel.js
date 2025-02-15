import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { City } from "./CityModel.js";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        validate: {
            validator: value => {
                return value.trim()
            },
            message: 'Name is required'
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => {
                return value.trim()
            },
            message: 'Email is required'
        }
    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: value => {
                return value.trim()
            },
            message: 'Phone is required'
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: value => {
                return value.trim()
            },
            message: 'Password is required'
        }
    },
    role: {
        type: String,
        enum: ['customer', 'provider'],
        required: true
    },
    profile_pic: {
        type: String,
        default: 'avatar.jpg'
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
        required: true,
        validate: {
            validator: value => value !== '',
            message: 'City is required'
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

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

export const User = mongoose.model('user', userSchema);