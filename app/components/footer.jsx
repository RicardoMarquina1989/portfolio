// @flow strict
import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import ContactSection from "./homepage/contact";
import { personalData } from "@/utils/data/personal-data";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm md:text-xl flex items-center gap-3">
            <MdAlternateEmail
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>{personalData.email}</span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3">
            <IoMdCall
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>{personalData.phone}</span>
          </p>
          <p className="text-sm md:text-xl flex items-center gap-3">
            <CiLocationOn
              className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
              size={36}
            />
            <span>{personalData.address}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
