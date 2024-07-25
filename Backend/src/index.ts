import express, {Express} from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute';
import blogRoute from './routes/blogRoute';
import cors from 'cors';

const app: Express = express();

dotenv.config();

const PORT  = process.env.PORT || 3000;

app.use(cors({origin : 'http://localhost:5173'}));

app.use(express.json());

app.use('/api/auth', authRoute);

app.use('/api/blog', blogRoute);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})