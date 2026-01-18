/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
        className="mx-auto text-center h-[70%] w-full md:h-[85vh] bg-green-200 px-6 md:px-35 flex items-center rounded-b-[40px] md:rounded-b-[80px] relative mt-17"
        id="home"
      >
        <Image
          src="/images/new-intro.jpg"
          alt="bg"
          fill
          className="object-cover rounded-b-[40px] md:rounded-b-[80px]"
        />

        <div className="space-y-3 text-left w-full md:max-w-[40%] z-20 text-white">
          <p className="text-[32px] md:text-[64px] font-medium leading-tight md:leading-[76.8px]">
            Building Innovative Mobile Experience
          </p>

          <p className="text-[16px] md:text-[18px] font-medium mt-3">
            Your Vision, Developed for iOS & Android Apps
          </p>

          <button
            className="bg-green-500 rounded-[50px] px-6 md:px-8 py-3 md:py-4 text-[14px] md:text-[16px] font-medium mt-5 border border-black text-black"
            onClick={() => router.replace("#1")}
          >
            Explore
          </button>
        </div>
      </section>

      <section id="1">
        <div className="py-10 md:py-16 mx-4 md:mx-8.75 flex flex-col md:flex-row gap-6 md:gap-0 justify-evenly items-center border p-4 md:p-2 rounded-[40px] md:rounded-[80px]">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/apple-logo.png"
              alt="apple"
              width={50}
              height={80}
            />
            <p className="text-[16px] md:text-[18px] font-medium">iOS</p>
          </div>

          <div className="flex gap-2 items-center pl-10 md:p-0">
            <Image
              src="/images/android-logo.png"
              alt="android"
              width={24}
              height={45}
            />
            <p className="text-[16px] md:text-[18px] font-medium">Android</p>
          </div>
        </div>
      </section>

      <section className="mx-auto text-center md:h-[85vh] bg-green-50 px-6 md:px-35 rounded-t-[40px] md:rounded-t-[80px]">
        <div className="text-[28px] md:text-[42px] font-medium py-8 md:py-10 mb-6 md:mb-10">
          <p className="text-[20px] md:text-[25px] font-bold">
            Technology we use
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Swift */}
          <div className="p-6 md:p-10 rounded-2xl bg-white space-y-3 border">
            <div className="flex flex-col gap-2 items-center">
              <GrSwift color="orange" size={24} />
              <p className="text-[16px] font-medium">Swift</p>
            </div>
            <p className="text-[14px] text-center md:text-left">
              Develop powerful, secure, and high-performance native iOS
              applications using Swift, ensuring seamless integration with
              Apple’s ecosystem and optimized app performance.
            </p>
          </div>

          {/* Flutter */}
          <div className="p-6 md:p-10 rounded-2xl bg-white space-y-3 border">
            <div className="flex flex-col gap-2 items-center">
              <BiLogoFlutter color="skyBlue" size={24} />
              <p className="text-[16px] font-medium">Flutter</p>
            </div>
            <p className="text-[14px] text-center md:text-left">
              Build high-performance, cross-platform mobile apps with a single
              codebase using Google’s Flutter framework, delivering fast UI,
              smooth animations, and native-like performance for both iOS and
              Android..
            </p>
          </div>

          {/* Kotlin */}
          <div className="p-6 md:p-10 rounded-2xl bg-white space-y-3 border">
            <div className="flex flex-col gap-2 items-center">
              <TbBrandKotlin size={24} />
              <p className="text-[16px] font-medium">Kotlin</p>
            </div>
            <p className="text-[14px] text-center md:text-left">
              Build high-performance, native Android applications using Google’s
              Kotlin programming language, delivering fast execution, smooth
              interactions, and reliable performance across all modern Android
              devices.
            </p>
          </div>

          {/* React Native */}
          <div className="p-6 md:p-10 rounded-2xl bg-white space-y-3 border">
            <div className="flex flex-col gap-2 items-center">
              <FaReact color="skyBlue" size={24} />
              <p className="text-[16px] font-medium">React Native</p>
            </div>
            <p className="text-[14px] text-center md:text-left">
              Create scalable and dynamic mobile applications using React
              Native, enabling shared code across platforms while maintaining a
              near-native user experience and fast development cycle.
            </p>
          </div>
        </div>
      </section>

      <IOS />
      <Android />
      <ContactUs />
      <Footer />
    </div>
  );
};
