import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BiPlay } from "react-icons/bi"
import cinema from "../assets/images/cinema.png"
import gaming from "../assets/images/gaming-room.webp"
import akuma from "../assets/images/HD-wallpaper-akuma.jpg"
import mans from "../assets/images/Le-Mans.webp"
import tokyo from "../assets/images/Tokyo.webp"
import zimmer from "../assets/images/zimmer.webp"
import samus from "../assets/images/Samus_Aran.png"

export default function Suggested()
{
    return(
        <>
        <div className="flex justify-between px-3 pb-3 pt-6">
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
        className="mySwiper h-52 px-3"
        >
        <SwiperSlide><img src={cinema} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={gaming} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={akuma} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={mans} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={tokyo} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={zimmer} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src={samus} alt="" className=" h-full rounded-md" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" className=" h-full" /></SwiperSlide>
        <SwiperSlide><img src="" alt="" className=" h-full" /></SwiperSlide>
      </Swiper>

        </>
    )
}