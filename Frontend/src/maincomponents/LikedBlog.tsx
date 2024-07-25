

export default function LikedBlog({title, content}: {title:string, content:string}): JSX.Element{
    return (
        <div className="w-full p-2 shadow-md rounded-md">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-gray-700">{content.substring(0,50) + "..."}</p>
        </div>
    )
}