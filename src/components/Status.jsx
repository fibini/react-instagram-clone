import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import cinema from "../assets/images/cinema.png"
import gaming from "../assets/images/gaming-room.webp"
import akuma from "../assets/images/HD-wallpaper-akuma.jpg"
import mans from "../assets/images/Le-Mans.webp"
import tokyo from "../assets/images/Tokyo.webp"
import zimmer from "../assets/images/zimmer.webp"
import samus from "../assets/images/Samus_Aran.png"
import terabytelogo from "../assets/images/terabytelogo.jpg"
import computer from "../assets/images/computer.jpg"

export default function Status()
{
    return(
        <>
        <Swiper
        slidesPerView={4}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 6,
            },
            650: {
                // width: 768,
                slidesPerView: 7,
              },
            768: {
              // width: 768,
              slidesPerView: 8,
            },
          }}
        className=" h-25 pb-2"
        >
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full">
                    <img src={cinema} alt="" className=" h-16 w-16 rounded-full" />
                </div>
            </div>
            <p className=" text-xs">Your story</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={gaming} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className=" text-xs">gaming_room</p>    
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={akuma} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className="text-xs">akuma</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={mans} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className="text-xs">le_mans</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={tokyo} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className="text-xs">tokyo</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={zimmer} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className="text-xs">zimmer</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={samus} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className="text-xs">samus</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={terabytelogo} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className="text-xs">terabyte_solutions</p>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
            <div className="flex flex-col text-center items-center">
                <div className=" flex justify-center items-center h-20 w-20 rounded-full border-2 border-red-500">
                    <img src={computer} alt="" className=" h-5/6 w-5/6 rounded-full" />
                </div>
            </div>
            <p className="text-xs">computer</p>
        </SwiperSlide>
      </Swiper>

        </>
    )
}