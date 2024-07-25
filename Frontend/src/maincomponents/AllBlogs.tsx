import axios from 'axios';
import { useState, useEffect} from "react";
import { Divider } from "@mui/material";
import BlogCard from '../maincomponents/BlogCard';
import BlogCardSkeleton from './BlogCardSkeleton';

interface blogType {
    title: string,
    content: string,
    image : string,
}

export default function AllBlogs(){

    const [blogs, setBlogs] = useState<blogType[]>([]);
    const [page, setPage] = useState<number>(1);
    const [isEnd, setIsend] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchBlogs();
    },[page])

    async function fetchBlogs(){

        const token = localStorage.getItem('token') || '';

        if(isEnd) return;

        try{
            const {data} = await axios.get(`http://localhost:3000/api/blog/all?page=${page}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${token}`
                }
            })

            if(data.blogs.length < 5) setIsend(true);
            setBlogs((prev) => [...prev, ...data.blogs]);
            setIsLoading(false);
        }
        catch(err: any){
            console.log(err);
        }
    }

    async function handleInfinteScroll(){
        try{

            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const height = window.innerHeight;

            if(scrollTop + height + 1 >= scrollHeight){
                setPage(prev => prev + 1);
            }
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleInfinteScroll);

        return function(){
            window.removeEventListener('scroll', handleInfinteScroll);
        }
    },[])

    return (
        <div className="w-8/12">
            <h2 className="text-3xl my-2 font-semibold">Blogs</h2>
            <Divider />
            <div className="mt-6 flex flex-col gap-4">
                {   
                    isLoading ? 
                    <div className='flex flex-col gap-5'>
                        <BlogCardSkeleton/>
                        <BlogCardSkeleton/>
                        <BlogCardSkeleton/>
                    </div>
                    : 
                    blogs.map((blog, index) => <BlogCard key={index} title={blog.title} content={blog.content} image={blog.image}/>)
                }
            </div>
        </div>
    )
}