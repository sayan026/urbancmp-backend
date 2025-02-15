import jwt from "jsonwebtoken";

const authCheck = async (req, res, next) => {
    try {
        const verified = await jwt.verify(req.body.token, process.env.JWT_SECRET);
        return res.status(200).json({ success: true });
    } catch (err) {
        await next(err);
    }
}

export default authCheck;