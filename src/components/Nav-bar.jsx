import { useState } from "react";
import { BiHeart, BiMessageRoundedDots } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import { HiOutlineStar } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";

export default function Nav() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      <div className=" flex justify-between px-3 pt-3 fixed w-full z-10 bg-white top-0 items-center">
        <div>
          <div className=" flex items-end cursor-pointer" onClick={() => setDropDownOpen((prev) => !prev)}>
            <h1 id="instagram" className=" text-2xl">Instagram</h1>
            <RxCaretDown
              size="18"
            />
          </div>
        </div>
        <div className=" flex gap-4">
          <BiHeart size="25" />
          <BiMessageRoundedDots size="25" />
        </div>
      </div>
      {dropDownOpen && (
        <div className="border-2 rounded-lg bg-white px-3 ml-5 w-fit shadow-[15px_15px_50px_10px_rgba(0,0,0,0.25)] fixed z-10 top-11">
          <div className=" flex gap-6 items-center py-2">
            <h2>Following</h2>
            <SlPeople size="23" />
          </div>
          <div className=" flex gap-6 items-center py-2">
            <h2>Favorites</h2>
            <HiOutlineStar size="23" />
          </div>
        </div>
      )}
    </>
  );
}
