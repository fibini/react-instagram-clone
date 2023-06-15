import { BsThreeDotsVertical } from "react-icons/bs"
import { MdVerified } from "react-icons/md"
import { BiHeart } from "react-icons/bi";
import { SlPaperPlane } from "react-icons/sl"
import { FiMessageCircle } from "react-icons/fi"
import { HiOutlineBookmark } from "react-icons/hi"
import manchesterunited from "../assets/images/manchesterunited.jpg"

export default function Posts()
{
    return(
        <>
        <div>
            <div className="flex justify-between px-3 items-center border-b-2 border-black">
                <div className="flex items-center gap-2 py-2">
                    <div className="border-2 rounded-full w-8 h-8 border-slate-800 "></div>
                    <p className="text-xs">manchesterunited</p>
                    <MdVerified />
                </div>
                <BsThreeDotsVertical size="25" />
            </div>
            <div>
                <img src={manchesterunited} alt="manchester united photo" />
            </div>
            <div className="flex justify-between px-3 py-2 items-center">
                <div className="flex gap-2">
                    <BiHeart size="25" />
                    <FiMessageCircle size="25" />
                    <SlPaperPlane size="25" />
                </div>
                <HiOutlineBookmark size="25" />
            </div>
            <div className=" px-3">
                <strong>10,000 likes</strong><br />
                <p><strong>manchesterunited</strong> official 2023 calender</p>
                <p>5 days ago</p>
            </div>
        </div>
        </>
    )
}