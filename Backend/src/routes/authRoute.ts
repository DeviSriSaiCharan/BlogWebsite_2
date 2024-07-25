import express, {Router} from 'express';
import {signUp, signIn} from '../controllers/auth.controllers';

const authRoute: Router = Router();

authRoute.post('/signin', signIn);

authRoute.post('/signup', signUp);


export default authRoute;