import {Request, Response} from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken';

const prisma = new PrismaClient();

export async function signIn(req: Request, res: Response){

    const {email, password} = req.body;

    try{
        const user = await prisma.user.findUnique({
            where : {
                email
            }
        })

        if(user){
            const match = await bcrypt.compareSync(password, user.password);

            if(match){

                const token = generateToken(user.id);

                return res.status(200).json({success : true, message: 'User found.', token : token})
            }
            else{
                return res.status(400).json({success : false, message: 'Password is incorrect.'})
            }
        }
        else{
            return res.status(400).json({success : false, message: 'User not found.'})
        }
    }
    catch(err){
        return res.status(400).json({success : false, message: err})
    }
}

export async function signUp(req: Request, res: Response){

    const {username, email, password} = req.body;

    const hashPass = bcrypt.hashSync(password, 10);

    try{
        const newUser = await prisma.user.create({
            data : {
                username,
                email,
                password: hashPass
            }
        })

        if(newUser){

            const token = generateToken(newUser.id);

            res.status(200).json({created : true, newUser, token : token});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json({created : false, message : err})
    }
}