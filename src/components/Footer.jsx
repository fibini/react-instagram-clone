import { HiHome } from "react-icons/hi"
import { BiSearch, BiMoviePlay } from "react-icons/bi"
import { FiPlusSquare } from "react-icons/fi"
import samus from "../assets/images/Samus_Aran.png"

export default function Footer()
{
    return(
        <>
        <div className="flex justify-evenly fixed w-full bottom-0 h-10 items-center bg-slate-100">
            <HiHome size= "25" cursor= "pointer" />
            <BiSearch size= "25" cursor= "pointer" />
            <FiPlusSquare size= "25" cursor= "pointer" />
            <BiMoviePlay size= "25" cursor= "pointer" />
            <div className="border-2 rounded-full w-5 h-5 border-slate-600 cursor-pointer">
                {/* <img src={samus} alt="profile image" /> */}
            </div>
        </div>
        </>
    )
}