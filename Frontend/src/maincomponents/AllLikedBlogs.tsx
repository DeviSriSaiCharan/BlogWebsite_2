import { useState, useEffect } from "react"
import LikedBlog from "./LikedBlog"
import axios from "axios";

type Blog = {
    title: string;
    content: string;
}

export default function AllLikedBlogs(): JSX.Element{

    const [likedBlogs, setLikedBlogs] = useState<Blog[]>();

    useEffect(() =>{
        async function getMostLikedBlogs(){
            try{
                const {data} = await axios.get('http://localhost:3000/api/blog/mostLiked');
                setLikedBlogs(data.blogs);
            }
            catch(err:any){
                console.log(err);
            }
        }

        getMostLikedBlogs();
    },[])

    return (
        <>
            {
                likedBlogs && likedBlogs.map((blog, index) => <LikedBlog key={index} title={blog.title} content={blog.content} />)
            }
        </>
    )
}
