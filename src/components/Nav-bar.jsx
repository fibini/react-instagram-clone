import { useState } from "react";
import { BiHeart, BiMessageRoundedDots } from "react-icons/bi";
import { RxCaretDown } from "react-icons/rx";
import { HiOutlineStar } from "react-icons/hi";
import { SlPeople } from "react-icons/sl";

export default function Nav() {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  return (
    <>
      <div className=" flex justify-between bg-slate-200">
        <div className=" pl-5">
          <div className=" flex items-end cursor-pointer" onClick={() => setDropDownOpen((prev) => !prev)}>
            <h1>Instagram</h1>
            <RxCaretDown
              size="18"
            />
          </div>
        </div>
        <div className=" flex gap-4 pr-5">
          <BiHeart size="25" />
          <BiMessageRoundedDots size="25" />
        </div>
      </div>
      {dropDownOpen && (
        <div className="border-2 rounded-lg bg-white px-3 ml-5 w-fit">
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
