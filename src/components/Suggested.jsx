import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { AiFillHeart } from "react-icons/ai"
import { BiPlay, BiMoviePlay} from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"
import { SlPaperPlane } from "react-icons/sl"
import { FiMessageCircle } from "react-icons/fi"
import { HiOutlineBookmark } from "react-icons/hi"
import cinema from "../assets/images/cinema.png"
import gaming from "../assets/images/gaming-room.webp"
import akuma from "../assets/images/HD-wallpaper-akuma.jpg"
import mans from "../assets/images/Le-Mans.webp"
import tokyo from "../assets/images/Tokyo.webp"
import zimmer from "../assets/images/zimmer.webp"
import samus from "../assets/images/Samus_Aran.png"
import terabytelogo from "../assets/images/terabytelogo.jpg"
import computer from "../assets/images/computer.jpg"

export default function Suggested()
{
    return(
        <>
        <div className=" flex text-base items-center px-3 font-bold border-y-2 py-2">
          <p>Suggested posts</p>
        </div>
        <div className="flex justify-between px-3 pb-3 pt-2">
            <strong>Suggested reels</strong>
            <div className="flex items-center">
                <BiPlay size="20" />
                <strong>Watch all</strong>
            </div>
        </div>
        <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-52 px-3 pb-3"
        >
        <SwiperSlide><img src={cinema} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={gaming} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={akuma} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={mans} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={tokyo} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={zimmer} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={samus} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={terabytelogo} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={computer} alt="" className=" h-full rounded-md" /></SwiperSlide>
      </Swiper>

        </>
    )
}

export function Sugpost()
{
  return(
    <>
    <div>
      <div className=" absolute flex justify-between w-full px-3 pt-2 text-white">
        <div className=" flex items-center gap-2">
          <div>
            <img className=" rounded-full w-8 h-8" src={terabytelogo} alt="" />
          </div>
          <div className=" text-xs">
            <p className=" font-bold">terabyte_solutions</p>
            <p>tech . repairs</p>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <button className=" border-2 border-white w-20 h-8 rounded-lg text-sm">Follow</button>
          <BsThreeDotsVertical size="25" />
        </div>
      </div>
      <div className=" absolute flex flex-col w-full items-center justify-center mt-48 text-white">
        <button className=" flex items-center justify-center gap-1 w-44 h-10 border-2 rounded-lg border-black bg-slate-800 opacity-70">
        <BiMoviePlay  />
          <p>Watch more reels</p>
        </button>
        <p>Watch Again</p>
      </div>
      <img src={gaming} alt="" />
      <div className="flex justify-between px-3 py-2 items-center">
                <div className="flex gap-2">
                    <AiFillHeart size="25" color="red" />
                    <FiMessageCircle size="25" />
                    <SlPaperPlane size="25" />
                </div>
                <HiOutlineBookmark size="25" />
            </div>
            <div className=" px-3">
                <strong>5,000,001, likes</strong><br />
                <p><strong>terabyte_solutions</strong> gaming room of bliss</p>
                <p>2 days ago</p>
            </div>
    </div>
    </>
  )
}