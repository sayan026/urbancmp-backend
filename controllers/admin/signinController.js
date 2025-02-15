import jwt from "jsonwebtoken";
import { User } from "../../models/UserModel.js";

const signIn = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            email
        });

        if (!user) {
            return res.status(401).json({ message: `Sorry! we can't find your record` });
        }
        const matched = await user.matchPassword(password);
        if (!matched) {
            return res.status(401).json({ message: 'Credentials not matching' });
        }

        const secret = process.env.JWT_SECRET;
        const expire = process.env.JWT_EXPIRE;
        const token = jwt.sign(
            { id: user._id },
            secret,
            { expiresIn: expire }
        );
        return res.status(200).json({ message: 'Signin successful!', token });
    } catch (err) {
        await next(err);
    }
}

export default signIn;