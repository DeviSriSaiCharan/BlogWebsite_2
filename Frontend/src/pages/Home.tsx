import { useState, useEffect } from "react";
import BlogCard from '../maincomponents/BlogCard';
import AllBlogs from "../maincomponents/AllBlogs";
import Navbar from "../maincomponents/Navbar";
import BlogCardSkeleton from "@/maincomponents/BlogCardSkeleton";
import AllLikedBlogs from "../maincomponents/AllLikedBlogs";
import { Divider } from "@mui/material";


export default function Home(): JSX.Element {
    const [curr, setCurr] = useState<number>(0);

    const topBlogs: { src: string }[] = [
        { src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { src: 'https://plus.unsplash.com/premium_photo-1669386263238-3af768c65ae4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { src: 'https://images.unsplash.com/photo-1429704658776-3d38c9990511?q=80&w=2579&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
    ];

    const next = () => setCurr(curr === topBlogs.length - 1 ? 0 : curr + 1);

    useEffect(() => {
        const interval = setInterval(next, 3000);
        return () => clearInterval(interval);
    }, [curr]);

    

    return (
        <div className="w-full h-fit px-16 py-2 ">
            <Navbar/>
            <div className=" mb-8 h-96 m-auto w-full flex rounded-md overflow-hidden">
                <div className="flex h-96 w-full transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)`, width: `${topBlogs.length * 100}%` }}>
                    {topBlogs.map((blog, index) => (
                        <TopBlogs key={index} url={blog.src} />
                    ))}
                </div>
            </div>

            <div className="flex gap-10 mb-14">
                <div className="w-1/2">
                    <BlogCard image="asd" title="adfad" content="The primary issue with the useEffect hook handling getBlogs is that it doesn't handle asynchronous operations correctly. You call getBlogs and directly set its result to the state without awaiting it. Additionally, the effect hook doesn't specify a dependency array, meaning it will run on every render, which is likely unintended."/>
                </div>
                <div className="w-1/2">
                    <BlogCardSkeleton/>
                </div>
            </div>

            <div className="flex gap-16 relative">
                <AllBlogs/>
                <div className="w-4/12 sticky top-5 h-fit">
                    <h2 className="text-2xl my-2 font-medium">Most liked blogs</h2>
                    <Divider />
                    <div className="flex flex-col mt-6 gap-4">
                        <AllLikedBlogs />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TopBlogs({ url }: { url: string }) {
    const content = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia unde neque architecto adipisci beatae ea, corporis nemo qui. Error quos culpa aut, labore aliquam ut illum maxime! Ad, beatae.";

    return (
        <div className="rounded-md h-96 w-full flex-shrink-0" style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className=" text-white w-1/2  px-10 flex flex-col justify-center h-96 gap-5 ">
                <h1 className="text-6xl">Title of the project</h1>
                <p className="text-2xl font-medium">{content.substring(0, 130) + "..."}</p>
                <a className="text-indigo-700 font-semibold text-lg underline mt-10" href="#">Continue Reading...</a>
            </div>
        </div>
    );
}
