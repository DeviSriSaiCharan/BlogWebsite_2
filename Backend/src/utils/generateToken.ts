import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export default function generateToken(id : String): String{

    const token = jwt.sign({_id : id}, process.env.JWT_SECRET!)

    return token;
}