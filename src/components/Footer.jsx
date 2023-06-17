import { HiHome } from "react-icons/hi"
import { BiSearch, BiMoviePlay } from "react-icons/bi"
import { FiPlusSquare } from "react-icons/fi"
import cinema from "../assets/images/cinema.png"

export default function Footer()
{
    return(
        <>
        <div className="flex justify-around fixed w-full bottom-0 h-10 items-center bg-white z-10">
            <HiHome size= "25" cursor= "pointer" />
            <BiSearch size= "25" cursor= "pointer" />
            <FiPlusSquare size= "25" cursor= "pointer" />
            <BiMoviePlay size= "25" cursor= "pointer" />
            <div className=" flex items-center border-2 rounded-full w-5 h-5 cursor-pointer">
                <img src={cinema} alt="cinema profile pic" className=" rounded-full w-5 h-5" />
            </div>
        </div>
        </>
    )
}