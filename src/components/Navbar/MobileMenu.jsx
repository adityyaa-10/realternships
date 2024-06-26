"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import whiteLogo from "@/assets/global/logo_white.svg";
import WhyRealternMobileMenu from "./WhyRealternMobileMenu";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="fixed top-11 z-50 mx-auto flex h-max w-[95%] items-center justify-between rounded-full bg-black/30 bg-opacity-25 py-3 pl-3 pr-3 text-white backdrop-blur-lg sm:pl-8">
        <div className="flex items-center justify-center">
          <Link href="/">
            <Image
              src={whiteLogo}
              alt="logo"
              width={1200}
              height={1200}
              className="h-6 w-28 object-contain sm:h-8 sm:w-40"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full bg-white p-2 text-[#4A5FF6] focus:outline-none"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex animate-slide-down flex-col gap-y-4 overflow-auto bg-white px-6 pb-4 pt-32">
          <div
            className={`flex flex-col justify-between rounded-[35px] bg-[#E6E8FE] px-6 py-5 text-xl`}
          >
            <div
              className="flex flex-row items-center justify-between"
              onClick={() => toggleDropdown("why-realtern")}
            >
              <Link href={"/why-realtern"}>Why Realtern</Link>
              {openDropdown === "why-realtern" ? (
                <FiChevronUp color="#505050CC" />
              ) : (
                <FiChevronDown color="#505050CC" />
              )}
            </div>
            {openDropdown === "why-realtern" && (
              <>
                <WhyRealternMobileMenu />
              </>
            )}
          </div>
          <div>
            <div
              className={`flex flex-col justify-between rounded-[35px] bg-[#E6E8FE] px-6 py-5 text-xl`}
            >
              <div
                className="flex flex-row items-center justify-between"
                onClick={() => toggleDropdown("community")}
              >
                <Link href={"/community"}>Community</Link>
                {openDropdown === "community" ? (
                  <FiChevronUp color="#505050CC" />
                ) : (
                  <FiChevronDown color="#505050CC" />
                )}
              </div>
              {openDropdown === "community" && (
                <>
                  <WhyRealternMobileMenu />
                </>
              )}
            </div>
          </div>
          <div
            className={`flex flex-col justify-between rounded-[35px] bg-[#E6E8FE] px-6 py-5 text-xl`}
          >
            <div
              className="flex flex-row items-center justify-between"
              onClick={() => toggleDropdown("startup-glimpse")}
            >
              <Link href={"/startup-glimpse"}>Startup Glimpse</Link>
              {openDropdown === "startup-glimpse" ? (
                <FiChevronUp color="#505050CC" />
              ) : (
                <FiChevronDown color="#505050CC" />
              )}
            </div>
            {openDropdown === "startup-glimpse" && (
              <>
                <WhyRealternMobileMenu />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
