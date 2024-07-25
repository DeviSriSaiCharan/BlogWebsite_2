import { Router } from "express";
import {getAllBlogs, createBlog, getMostLikedBlogs} from '../controllers/blogs.controllers';
import authCheck from "../middlewares/authCheck";

const blogRoute: Router = Router();



blogRoute.get('/all', getAllBlogs);

blogRoute.get('/mostLiked', getMostLikedBlogs);

// blogRoute.use(authCheck);

blogRoute.post('/', createBlog);

blogRoute.get('/');

export default blogRoute;