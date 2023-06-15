import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import cinema from "../assets/images/cinema.png"
import gaming from "../assets/images/gaming-room.webp"
import akuma from "../assets/images/HD-wallpaper-akuma.jpg"
import mans from "../assets/images/Le-Mans.webp"
import tokyo from "../assets/images/Tokyo.webp"
import zimmer from "../assets/images/zimmer.webp"
import samus from "../assets/images/Samus_Aran.png"

export default function Status()
{
    return(
        <>
        <Swiper
        slidesPerView={7}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className=" h-20 px-3"
        >
        <SwiperSlide><img src={cinema} alt="" className=" h-14 w-14 rounded-full" /></SwiperSlide>
        <SwiperSlide>
            <div className="flex flex-col text-center">
                <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                    <img src={gaming} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            
            </SwiperSlide>
        <SwiperSlide>
            <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                <img src={akuma} alt="" className=" h-5/6 w-5/6 rounded-full" />
            </div>
            <p></p>
            </SwiperSlide>
        <SwiperSlide>
            <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                <img src={mans} alt="" className=" h-5/6 w-5/6 rounded-full" />
            </div>
            <p></p>
            </SwiperSlide>
        <SwiperSlide>
            <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                <img src={tokyo} alt="" className=" h-5/6 w-5/6 rounded-full" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                <img src={zimmer} alt="" className=" h-5/6 w-5/6 rounded-full" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                <img src={samus} alt="" className=" h-5/6 w-5/6 rounded-full" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                <img src="" alt="" className=" h-5/6 w-5/6" />
            </div>
            </SwiperSlide>
        <SwiperSlide>
            <div className=" flex justify-center items-center h-16 rounded-full border-2 border-red-500">
                <img src="" alt="" className=" h-5/6 w-5/6" />
            </div>
            </SwiperSlide>
      </Swiper>

        </>
    )
}