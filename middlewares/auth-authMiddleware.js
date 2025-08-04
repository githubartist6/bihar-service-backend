const jwt = require("jsonwebtoken");
const User = require("../models/use-models");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res
            .status(402)
            .json({ message: "Unauthorized HTTP, Token not provided" });
    };

    const jwtToken = token.replace("Bearer ", "").trim();

    try {
        const isVerifid = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);
        const userData = await User.findOne({ email: isVerifid.email }).
            select({
                password: 0,
            });

        req.user = userData;
        req.token = token;
        req.userId = userData._id;
        console.log(userData);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized. Invalid token." })

    }
};

module.exports = authMiddleware;