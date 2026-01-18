import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const ContactUs = () => {
  return (
    <section id="contact-us" className="">
      <div className="relative h-[60vh]  rounded-b-[80px] overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 rounded-b-[80px]" />

        <div className="z-30 flex flex-col h-full items-start justify-center px-35 pt-10 relative">
          <p className="text-[64px] z-20">Contact Us</p>
        </div>

        <Image
          src="/images/contact-us.jpeg"
          fill
          alt="bg"
          className="object-contain rounded-b-[80px] object-right  opacity-90 "
        />
      </div>

      <div className="flex pt-15 pl-35 pr-15 gap-10 bg-green-50 pb-10">
        <div className="flex-2  flex flex-col gap-5">
          <p className="text-[24px] font-medium">Contact Details</p>
          <div className="flex">
            <div className="flex-1 flex flex-col gap-5">
              <div className=" flex gap-6 items-start">
                <div className="flex gap-5 items-center">
                  <FaLocationDot color="#8DD348" />
                  <div className="space-y-2">
                    <p className="text-[20px]">Our Location</p>
                    <p className="text-[15px] text-[#5D6167] max-w-50">
                      200 Villagewalk Blvd Suite 304, London, ON N6G 0W8
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <FaPhone color="#8DD348" />
                  <div className="space-y-2">
                    <p className="text-[20px]">Call Us</p>
                    <p className="text-[15px] text-[#5D6167]">+15198081000</p>
                  </div>
                </div>
              </div>
              <div className=" flex gap-5">
                <div className="flex gap-5 items-center">
                  <IoMail color="#8DD348" />
                  <div className="space-y-2">
                    <p className="text-[20px]">Our Email</p>
                    <p className="text-[15px] text-[#5D6167]">
                      info@acesoft.ca
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-100"></div>
          <div className="flex flex-col gap-5 w-full ">
            <p className="text-[24px] font-medium">Send Us a Message</p>
            <input
              name="name"
              placeholder="Name"
              className="border p-2 border-gray-300"
            />
            <input
              name="email"
              placeholder="Email"
              className="border border-gray-300 p-2"
            />
            <input
              name="subject"
              placeholder="Subject"
              className="border border-gray-300 p-2"
            />
            <textarea
              name="message"
              id=""
              placeholder="Message"
              className="border border-gray-300 p-2"
              style={{ height: "110px" }}
            ></textarea>
            <div className="">
              <button className="p-2 bg-[#8DD348] rounded-2xl text-white text-[16px] px-3">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 pr-5 ">
          <p className="text-[24px] font-medium">Find Us</p>
          <div className="bg-blue-50 mt-5 relative h-[80%] rounded-2xl">
            <Image
              src="/images/map.jpeg"
              fill
              className="object-cover rounded-2xl"
              alt="map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
