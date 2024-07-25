

export default function BlogCard({title, content, image}: {title: string, content: string, image:string}): JSX.Element{

    return (
        <div className="flex gap-3 shadow-md rounded-md p-4 h-48 cursor-pointer hover:bg-gray-100">
            <div className="flex flex-col justify-between w-2/3">
                <div className="">
                    <h1 className="font-medium text-2xl mb-1">{title}</h1>
                    <p className="text-gray-500 mb-1 text-base">Nov 12</p>
                    <p className="text-lg mb-1">{content.substring(0,75) + " ....."}</p>
                </div>
                <div className="">
                    <a className="text-lg text-blue-600" href="#">Continue Reading...</a>
                </div>
            </div>
            <div className="w-1/3 p-2 flex justify-center items-center">
                <img src={image} className="w-full h-full "/>
            </div>
        </div>
    )
}