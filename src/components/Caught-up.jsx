import { IoMdCheckmark } from "react-icons/io"

export default function Caught()
{
    return(
        <>
        <div className="flex flex-col items-center py-8 gap-3">
            <div className=" border-2 border-red-800 rounded-full">
            <IoMdCheckmark size="35" color="red" />
            </div>
            <p className="font-bold text-sm ">You&apos;ve completely caught up</p>
            <p className=" text-xs">You&apos;ve seen all new posts from the past 3 days.</p>
            <a><p className=" font-bold text-xs text-blue-500 cursor-pointer">View Older Posts</p></a>
        </div>
        </>
    )
}