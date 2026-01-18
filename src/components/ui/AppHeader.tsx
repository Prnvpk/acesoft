"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const AppHeader = () => {
  const router = useRouter();
  const [path,setPath] = useState<string>("#home")
  return (
    <header className="text-black px-6 py-4 fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-sm shadow-sm z-30 mx-2 mt-1 rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/images/acesoft-logo-3.png"
            className="object-center "
            alt="logo"
            width={32}  
            height={32}
          />
          <p className="text-[19px] font-medium text-black">Acesoft</p>
        </div>

        {/* Navigation */}
        <nav className="text-[15px]">
          <ul className="flex space-x-6 text-[15px] font-normal">
            <li
              className={`hover:text-green-600 cursor-pointer  ${path === "#home" ? " text-green-500" : ""}`}
              onClick={() => {router.replace("#home")
                setPath("#home")
              }}
            >
              Home
            </li>
            <li
              className={`hover:text-green-600 cursor-pointer  ${path === "#ios" ? " text-green-500" : ""}`}
              onClick={() =>{ router.replace("#ios")
                setPath("#ios")
              }}
            >
              iOS Development
            </li>
            <li
              className={`hover:text-green-600 cursor-pointer  ${path === "#android" ? " text-green-500" : ""}`}
              onClick={() => {router.replace("#android")
                setPath("#android")
              }}
            >
              Android Development
            </li>
            <li
              className={`hover:text-green-600 cursor-pointer ${path === "#contact-us" ? " text-green-500" : ""}`}
              onClick={() => {router.replace("#contact-us")
                setPath("#contact-us")
              }}
            >
              Contact Us
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
