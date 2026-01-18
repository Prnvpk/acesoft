/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import Image from "next/image";
import { BiLogoFlutter } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { GrSwift } from "react-icons/gr";
import { ContactUs } from "./ContactUs";
import { Android } from "./Android";
import { IOS } from "./IOS";
import { SiKotlin } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { Footer } from "./Footer";
import { useEffect } from "react";

export const Home = () => {
  const router = useRouter();
 
  return (
    <div className="snap-y snap-mandatory">
      <section
        className="mx-auto text-center h-[85vh] bg-green-200 px-35 flex justify-start items-center rounded-b-[80px] relative mt-17"
        id="home"
      >
        <Image
          src="/images/new-intro.jpg"
          alt="bg"
          fill
          className="object-cover rounded-b-[80px]"
        />
        <div className="space-y-3 text-left max-w-[40%] z-20 text-white">
          <p className="text-[64px] font-medium leading-[76.8px]">
            Building Innovative Mobile Experience
          </p>
          <p className="text-[18px] font-medium mt-3">
            Your Vision, Develeoped for IOS & Android Apps
          </p>
          <button className="bg-green-500 rounded-[50px] px-8 py-4 text-[16px] font-medium mt-5 border border-black text-black cursor-pointer" onClick={(e) => router.replace("#1")}>
            Explore
          </button>
        </div>
      </section>
      <section id="1">
        <div className="py-16 mx-8.75 flex justify-evenly items-center border p-2 rounded-[80px]">
          <div className="flex gap-0 items-center">
            <Image
              src="/images/apple-logo.png"
              alt="apple"
              width={60}
              height={100}
            />
            <p className="text-[18px] font-medium">IOS</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image
              src="/images/android-logo.png"
              alt="android"
              width={27}
              height={50}
            />

            <p className="text-[18px] font-medium">Android</p>
          </div>
        </div>
      </section>
      <section className="mx-auto text-center h-[85vh] bg-green-50 px-35 rounded-t-[80px]">
        <div className="text-[42px] font-medium py-10 mb-10">
          <p className="text-[25px] font-bold">Technology we used</p>
        </div>
        <div className=" flex justify-start items-center">
          <div className="flex justify-evenly w-full">
            <div className="p-10 rounded-2xl bg-white space-y-3 w-70 text-left border">
              <div className="flex flex-col gap-2">
                <div className="flex items-center  flex-col gap-2">
                  <GrSwift color="orange" />
                  <p className="text-[16px] font-medium">Swift</p>
                </div>
                <p className="overflow-hidden text-[14px] text-">
                  Develop powerful, secure, and high-performance native iOS
                  applications using Swift, ensuring seamless integration with
                  Apple’s ecosystem and optimized app performance.
                </p>
              </div>
            </div>

            <div className="p-10 rounded-2xl bg-white space-y-3 w-70 text-left border">
              <div className="flex flex-col gap-2">
                <div className="flex items-center  flex-col gap-2">
                  <BiLogoFlutter color="skyBlue" size={16} />
                  <p className="text-[16px] font-medium">Flutter</p>
                </div>
                <p className="text-[14px]">
                  Build high-performance, cross-platform mobile apps with a
                  single codebase using Google’s Flutter framework, delivering
                  fast UI, smooth animations, and native-like performance for
                  both iOS and Android..
                </p>
              </div>
            </div>
            <div className="p-10 rounded-2xl bg-white space-y-3 w-70 text-left border">
              <div className="flex flex-col gap-2">
                <div className="flex items-center  flex-col gap-2">
                  <TbBrandKotlin size={16} />
                  <p className="text-[16px] font-medium">Kotlin</p>
                </div>
                <p className="text-[14px]">
                  Build high-performance, native Android applications using
                  Google’s Kotlin programming language, delivering fast
                  execution, smooth interactions, and reliable performance
                  across all modern Android devices.
                </p>
              </div>
            </div>
            <div className="p-10 rounded-2xl bg-white space-y-3 w-70 text-left border">
              <div className="flex flex-col gap-2">
                <div className="flex items-center  flex-col gap-2">
                  <FaReact color="skyBlue" />
                  <p className="text-[16px] font-medium">React Native</p>
                </div>
                <p className="text-[14px]">
                  Create scalable and dynamic mobile applications using React
                  Native, enabling shared code across platforms while
                  maintaining a near-native user experience and fast development
                  cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IOS />
      <Android />
      <ContactUs />
      <Footer/>
    </div>
  );
};
