import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export default function authCheck(req: Request, res: Response, next: NextFunction){
    const auth = req.headers.authorization;

    if(!auth) 
        return res.status(401).send({auth: false, message: 'No token provided.'});

    try{
        const token = auth.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        next();
    }
    catch(err){
        console.log(auth);
        return res.status(401).send({auth: false, message: 'Invalid token.', error : err});
    }
}
