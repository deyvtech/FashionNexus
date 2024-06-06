import jwt from "jsonwebtoken";


const generateToken = (response, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1d' });

    response.cookie('jwt', "Bearer " +  token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        expires: new Date(Date.now() + 4 * 3600000),
    })
}


export default generateToken