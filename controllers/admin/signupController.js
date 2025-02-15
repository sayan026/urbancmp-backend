import jwt from "jsonwebtoken";
import { User } from "../../models/UserModel.js";

const signUp = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            email: email
        });
    
        if (user) {
            return res.status(503).json({ message: 'User already registered' });
        }

        const created_at = new Date().toLocaleDateString();
        const newUser = await User.create({
            name: 'Anonymous', 
            email, 
            phone: '###', 
            password, 
            role: 'provider',
            address: '##',
            city_id: '673516be2b87dfb975a4a70d',
            created_at
        });

        const secret = process.env.JWT_SECRET;
        const expire = process.env.JWT_EXPIRE;
        const token = jwt.sign(
            { id: newUser._id }, 
            secret,
            { expiresIn: expire }
        );
        return res.status(200).json({ message: 'Signup successful', token });
    } catch (err) {
        await next(err);
    }

    return res.status(200).json(req.body);
}

export default signUp;