import { useState } from "react";
// import PostMenu from "./PostMenu"
import { BsThreeDotsVertical } from "react-icons/bs"
import { MdVerified } from "react-icons/md"
import { AiOutlineHeart } from "react-icons/ai"
import { SlPaperPlane } from "react-icons/sl"
import { FiMessageCircle } from "react-icons/fi"
// import { HiOutlineBookmark } from "react-icons/hi"
import manchesterunited from "../assets/images/manchesterunited.jpg"
import manchesterlogo from "../assets/images/Manchester_United_FC.png"
import { HiOutlineBookmark, HiOutlineInformationCircle } from "react-icons/hi"
import { BsQrCodeScan } from "react-icons/bs"
import { AiOutlineLine, AiOutlineClose, AiOutlineStar } from "react-icons/ai"
// import { SlPaperPlane } from "react-icons/sl"
import { MdOutlinePersonRemoveAlt1} from "react-icons/md"
import { BiHide } from "react-icons/bi"
import { RiAccountCircleLine } from "react-icons/ri"
import { TbMessageReport } from "react-icons/tb"

export default function Posts()
{
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <>
        <div>
            <div className="flex justify-between px-3 items-center border-b-2 border-black">
                <div className="flex items-center gap-2 py-2">
                    <div>
                        <img className="border-2 rounded-full w-8 h-8 " src={manchesterlogo} alt="" />
                    </div>
                    <div>
                        <div className=" flex gap-1">
                            <p className="text-xs font-bold">manchesterunited</p>
                            <MdVerified color="blue" />
                        </div>
                        <p className=" text-xs">Manchester, United Kingdom</p>
                    </div>
                </div>
                <BsThreeDotsVertical size="25" onClick={() => setMenuOpen((prev) => !prev)} />
            </div>
            {menuOpen && (
                <div className="fixed h-full w-full bg-black opacity-70 z-20 top-0" onClick={() => setMenuOpen(false)}></div>
            )}
            {menuOpen && (
                <div className="bg-white bottom-0 z-30 h-2/3 w-full fixed rounded-t-xl" onClick={() => setMenuOpen(false)} >
                    <div className=" flex justify-around items-center border-b-2 h-24 px-10 mt-2">
                        <div className=" text-center">
                            <div className=" flex justify-center items-center border-2 border-black rounded-full h-14 w-14">
                                <HiOutlineBookmark size="25" />
                            </div>
                            <p className=" text-xs font-bold">Save</p>
                        </div>
                        <div className=" flex items-start h-full -mt-12">
                            <AiOutlineLine size="40" />
                        </div>
                        <div>
                            <div className=" flex justify-center items-center border-2 border-black rounded-full h-14 w-14">
                                <BsQrCodeScan size="25" />
                            </div>
                            <p className=" text-xs font-bold">QR code</p>
                        </div>
                    </div>
                    <div className=" flex justify-between items-center py-2 px-3 border-b-2">
                        <div className=" flex gap-3 items-center">
                            <SlPaperPlane size="25" />
                            <div className=" text-sm">
                                <p>We&apos;re moving things around!</p>
                                <p className=" text-blue-600">See where to share and link</p>
                            </div>
                        </div>
                        <AiOutlineClose />
                    </div>
                    <div className=" flex gap-3 px-3 py-3 text-sm items-center">
                        <AiOutlineStar size="25" />
                        <p>Add to favorites</p>
                    </div>
                    <div className=" flex gap-3 px-3 py-3 border-b-2 text-sm items-center">
                        <MdOutlinePersonRemoveAlt1 size="25" />
                        <p>Unfollow</p>
                    </div>
                    <div className=" flex gap-3 px-3 py-3  text-sm items-center">
                        <HiOutlineInformationCircle size="25" />
                        <p>Why you&apos;re seeing this post</p>
                    </div>
                    <div className=" flex gap-3 px-3 py-3  text-sm items-center">
                        <BiHide size="25" />
                        <p>Hide</p>
                    </div>
                    <div className=" flex gap-3 px-3 py-3  text-sm items-center">
                        <RiAccountCircleLine size="25" />
                        <p>About this account</p>
                    </div>
                    <div className=" flex gap-3 px-3 py-3  text-sm items-center">
                        <TbMessageReport size="25" color="red" />
                        <p className=" text-red-600">Report</p>
                    </div>
                </div>
            )}
            <div>
                <img src={manchesterunited} alt="manchester united photo" />
            </div>
            <div className="flex justify-between px-3 py-2 items-center">
                <div className="flex gap-2">
                    <AiOutlineHeart size="25" />
                    <FiMessageCircle size="25" />
                    <SlPaperPlane size="25" />
                </div>
                <HiOutlineBookmark size="25" />
            </div>
            <div className=" px-3">
                <strong>10,000 likes</strong><br />
                <p><strong>manchesterunited</strong> official 2023 calender</p>
                <p>1 days ago</p>
            </div>
        </div>
        </>
    )
}