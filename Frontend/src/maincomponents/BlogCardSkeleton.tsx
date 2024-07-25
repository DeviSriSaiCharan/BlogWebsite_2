import { Skeleton } from "@/components/ui/skeleton"

export default function BlogCardSkeleton(){

    return (
        <div className="flex gap-10 shadow-md rounded-md p-4 h-48">
            <div className="flex flex-col justify-between w-2/3">
                <div className="">
                    <Skeleton className="mb-1 w-2/3 h-8" />
                    <Skeleton className="mb-1 w-16 h-8" />
                    <Skeleton className="mb-1 w-full h-12" />
                </div>
                <div className="">
                    <Skeleton className=" w-1/3 h-7" />
                </div>
            </div>
            <div className="w-1/3 ">
                <Skeleton className="w-full h-full" />
            </div>
        </div>
    )
}