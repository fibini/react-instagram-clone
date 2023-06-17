import { HiOutlineBookmark, HiOutlineInformationCircle } from "react-icons/hi"
import { BsQrCodeScan } from "react-icons/bs"
import { AiOutlineLine, AiOutlineClose, AiOutlineStar } from "react-icons/ai"
import { SlPaperPlane } from "react-icons/sl"
import { MdOutlinePersonRemoveAlt1} from "react-icons/md"
import { BiHide } from "react-icons/bi"
import { RiAccountCircleLine } from "react-icons/ri"
import { TbMessageReport } from "react-icons/tb"

export default function PostMenu()
{
    return(
        <>
        <div className="fixed h-full w-full bg-black opacity-70 z-20 top-0"></div>
        <div className="bg-white bottom-0 z-30 h-3/4 w-full fixed rounded-t-xl">
            <div className=" flex justify-around items-center border-b-2 h-24 px-10 mt-2">
                <div className=" text-center">
                    <div className=" flex justify-center items-center border-2 border-black rounded-full h-12 w-12">
                        <HiOutlineBookmark size="25" />
                    </div>
                    <p className=" text-xs font-bold">Save</p>
                </div>
                <div className=" flex items-start h-full -mt-12">
                    <AiOutlineLine size="40" />
                </div>
                <div>
                    <div className=" flex justify-center items-center border-2 border-black rounded-full h-12 w-12">
                        <BsQrCodeScan size="25" />
                    </div>
                    <p className=" text-xs font-bold">QR code</p>
                </div>
            </div>
            <div className=" flex justify-between items-center py-2 px-3 border-b-2">
                <div className=" flex gap-3 items-center">
                    <SlPaperPlane size="25" />
                    <div className=" text-xs">
                        <p>We&apos;re moving things around!</p>
                        <p className=" text-blue-600">See where to share and link</p>
                    </div>
                </div>
                <AiOutlineClose />
            </div>
            <div className=" flex gap-3 px-3 py-3 text-xs items-center">
                <AiOutlineStar size="25" />
                <p>Add to favorites</p>
            </div>
            <div className=" flex gap-3 px-3 py-3 border-b-2 text-xs items-center">
                <MdOutlinePersonRemoveAlt1 size="25" />
                <p>Unfollow</p>
            </div>
            <div className=" flex gap-3 px-3 py-3  text-xs items-center">
                <HiOutlineInformationCircle size="25" />
                <p>Why you&apos;re seeing this post</p>
            </div>
            <div className=" flex gap-3 px-3 py-3  text-xs items-center">
                <BiHide size="25" />
                <p>Hide</p>
            </div>
            <div className=" flex gap-3 px-3 py-3  text-xs items-center">
                <RiAccountCircleLine size="25" />
                <p>About this account</p>
            </div>
            <div className=" flex gap-3 px-3 py-3  text-xs items-center">
                <TbMessageReport size="25" color="red" />
                <p className=" text-red-600">Report</p>
            </div>
        </div>
        </>
    )
}