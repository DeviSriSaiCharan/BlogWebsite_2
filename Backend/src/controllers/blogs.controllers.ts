import { PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

export async function getAllBlogs(req: Request, res: Response) {

    const page: number = parseInt(req.query.page as string);
    const limit = 5;

    try {
        const blogs = await prisma.blog.findMany({
            select : {
                title : true,
                content : true,
                image : true
            },
            orderBy : {
                createdAt : 'desc'
            },
            skip : (page - 1) * limit,
            take : limit   
        });
        res.status(200).json({ blogs });
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message, message: "Something went wrong" });
    }
}

export async function createBlog(req: Request, res: Response) {
    try {
       
        const blog = await prisma.blog.create({
            data: {
                title: req.body.title,
                content: req.body.content,
                authorId: req.body.authorId,
                likes: req.body.likes,
                image: req.body.image
            },
        });

        res.status(201).json({ blog });
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message, message: "Internal server error" });
    }
}

export async function getMostLikedBlogs(req: Request, res: Response){

    try{
        const blogs = await prisma.blog.findMany({
            orderBy : {
                likes : "desc"
            },
            take : 5,
        })
        res.status(200).json({success:true, blogs})
    }
    catch(err: any){
        console.error(err);
        res.status(500).json({success: false, error: err.message, message: "Internal server error"})
    }
}