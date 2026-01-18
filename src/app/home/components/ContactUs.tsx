import Image from "next/image";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export const ContactUs = () => {
  return (
    <section id="contact-us">
      {/* Hero Banner */}
      <div className="relative h-[35vh] md:h-[60vh] rounded-b-[40px] md:rounded-b-[80px] overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-20" />

        <div className="z-30 flex flex-col h-full items-start justify-center px-6 md:px-35 pt-10 relative text-white">
          <p className="text-[32px] md:text-[64px] font-semibold">Contact Us</p>
        </div>

        <Image
          src="/images/contact-us.jpeg"
          fill
          alt="contact background"
          className="object-cover object-right opacity-90"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-10 bg-green-50 px-6 md:px-35 py-10">
        {/* Left Column - Details + Form */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <p className="text-[20px] md:text-[24px] font-medium">
            Contact Details
          </p>

          <div className="flex flex-col gap-5">
            {/* Location & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <FaLocationDot color="#8DD348" size={20} />
                <div className="space-y-1">
                  <p className="text-[18px] font-medium">Our Location</p>
                  <p className="text-[14px] text-[#5D6167]">
                    200 Villagewalk Blvd Suite 304, London, ON N6G 0W8
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaPhone color="#8DD348" size={18} />
                <div className="space-y-1">
                  <p className="text-[18px] font-medium">Call Us</p>
                  <p className="text-[14px] text-[#5D6167]">+15198081000</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <IoMail color="#8DD348" size={20} />
              <div className="space-y-1">
                <p className="text-[18px] font-medium">Our Email</p>
                <p className="text-[14px] text-[#5D6167]">
                  info@acesoft.ca
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-200 my-4"></div>

          {/* Contact Form */}
          <p className="text-[20px] md:text-[24px] font-medium">
            Send Us a Message
          </p>

          <div className="flex flex-col gap-4">
            <input
              name="name"
              placeholder="Name"
              className="border p-3 border-gray-300 rounded-md"
            />
            <input
              name="email"
              placeholder="Email"
              className="border p-3 border-gray-300 rounded-md"
            />
            <input
              name="subject"
              placeholder="Subject"
              className="border p-3 border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="border p-3 border-gray-300 rounded-md h-[120px]"
            />

            <button className="self-start p-3 bg-[#8DD348] rounded-2xl text-white text-[16px] px-5">
              Send Message
            </button>
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="w-full md:w-1/2">
          <p className="text-[20px] md:text-[24px] font-medium">Find Us</p>

          <div className="relative h-[250px] md:h-[450px] mt-5 rounded-2xl overflow-hidden">
            <Image
              src="/images/map.jpeg"
              fill
              className="object-cover"
              alt="map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
