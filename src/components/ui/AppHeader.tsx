"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const AppHeader = () => {
  const router = useRouter();
  const [path, setPath] = useState<string>("#home");
  const [open, setOpen] = useState(false);

  const handleNav = (hash: string) => {
    router.replace(hash);
    setPath(hash);
    setOpen(false); // close menu on mobile
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-2 mt-1 rounded-2xl bg-white/10 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6 md:py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/images/acesoft-logo-3.png"
              alt="logo"
              width={32}
              height={32}
            />
            <p className="text-[17px] md:text-[19px] font-medium text-black">
              Acesoft
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block text-[15px]">
            <ul className="flex space-x-6 font-normal">
              {[
                ["Home", "#home"],
                ["iOS Development", "#ios"],
                ["Android Development", "#android"],
                ["Contact Us", "#contact-us"],
              ].map(([label, hash]) => (
                <li
                  key={hash}
                  className={`hover:text-green-600 cursor-pointer ${
                    path === hash ? "text-green-500 font-medium" : ""
                  }`}
                  onClick={() => handleNav(hash)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-black"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <nav className="md:hidden border-t border-gray-200 bg-white/80 backdrop-blur-md rounded-b-2xl">
            <ul className="flex flex-col text-center text-[15px]">
              {[
                ["Home", "#home"],
                ["iOS Development", "#ios"],
                ["Android Development", "#android"],
                ["Contact Us", "#contact-us"],
              ].map(([label, hash]) => (
                <li
                  key={hash}
                  className={`py-3 border-b last:border-none cursor-pointer ${
                    path === hash ? "text-green-500 font-medium" : "text-black"
                  }`}
                  onClick={() => handleNav(hash)}
                >
                  {label}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
