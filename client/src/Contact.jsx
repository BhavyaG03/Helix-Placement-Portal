import React from 'react';
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact=()=> {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#17181E]">
        <h2 className="mt-8 font-serif text-3xl font-light text-white">Get in <span className='font-[620]'>Touch</span></h2>
        <p className="mt-2 font-sans text-[14px] text-white opacity-60 font-thin">Photography is a way of feeling, of touching, of loving.</p>

        <div className="flex items-center justify-center w-full h-full px-32">
          <div className="flex flex-col items-start justify-center w-full h-full gap-4">
            <div className="flex items-center justify-center gap-4 px-2 py-2">
              <FaMapMarkerAlt className='text-red-500' size={30}></FaMapMarkerAlt>
              <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-white text-[18px] font-sans font-light">Postal Address</p>
              <p className="text-white/75 text-[14px] font-sans font-thin">205 The White House, Courtney, USA</p>
              </div>
            </div>
            <div className="w-80 h-[1px] bg-white/65"></div>
            <div className="flex items-center justify-center gap-4 px-2 py-2">
              <IoIosMail className='text-red-500' size={30}></IoIosMail>
              <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-white text-[18px] font-sans font-light">General Inquiries</p>
              <p className="text-white/75 text-[14px] font-sans font-thin">contact@cycledark.com</p>
              </div>
            </div>
            <div className="w-80 h-[1px] bg-white/65"></div>
            <div className="flex items-center justify-center gap-4 px-2 py-2">
            <MdOutlinePhoneIphone className='text-red-500' size={30}></MdOutlinePhoneIphone>
              <div className="flex flex-col items-start justify-center gap-1">
              <p className="text-white text-[18px] font-sans font-light">Business Phone</p>
              <p className="text-white/75 text-[14px] font-sans font-thin">+123 456 7890</p>
              </div>
            </div>
            <div className="w-80 h-[1px] bg-white/65"></div>
          </div>
          <div className="w-[60%] h-[440px] px-10 py-8 bg-[#1A1A1A]">
          <form className='flex flex-col gap-2'>
            <h3 className="mb-4 font-serif text-lg font-light text-white text-opacity-75">Looking for an excellent business idea?</h3>
            <input type="text" placeholder="Name" className="text-white px-4 py-2 mb-4 w-[440px] bg-[#111111]"/>
            <input type="email" placeholder="Email" className="text-white px-4 py-2 mb-4 w-[440px] bg-[#111111]"/>
            <textarea placeholder="Submit Message" className="text-white px-4 py-2 mb-4 w-[440px] bg-[#111111]"></textarea>
            <button className="px-4 py-2 font-medium text-white text-opacity-75 bg-transparent border-2 border-red-700 border-solid rounded-full w-36 hover:bg-red-700">View More</button>
          </form>
          </div>
        </div>
    </div>
  );
}
export default Contact
