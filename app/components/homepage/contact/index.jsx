// @flow strict
import { personalData } from "@/utils/data/personal-data";
import { CiLocationOn } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex flex-col gap-5 lg:gap-9">
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

export default ContactSection;
