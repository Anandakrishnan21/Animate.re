"use client";
import { Links } from "@/utils/data";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full sticky top-0 z-[1000] p-2 bg-stone-950">
      <div className="w-11/12 mx-auto flex items-center justify-between p-2 border-b-[0.5px] border-b-[#afa18f]">
        <div className="font-medium">
          <Link href="#intro">
            <motion.p
              whileHover={{
                scale: 0.7,
                rotateX: 360
              }}
              transition={{
                duration: 1,
              }}
              initial={{
                scale: 1,
              }}
              className="text-3xl font-bold text-[#fffce1]"
            >
              Animate.re
            </motion.p>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="list-none flex items-center space-x-10 font-medium">
            {Links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-xl text-[#7c7c6f] hover:text-[#fffce1] duration-500"
              >
                <li className=" rounded p-2">{link.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-white flex md:hidden">
          <button
            onClick={toggleButton}
            className="h-7 w-24 flex items-center justify-center gap-1 border-2 border-white p-1 rounded-full"
          >
            <p className="text-sm">Menu</p>
            {isOpen ? (
              <IoClose className="h-4 w-6" />
            ) : (
              <IoMenu className="h-4 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="w-full">
            <ul className="list-none flex flex-col space-y-3 text-sm bg-[#fffce1] rounded">
              {Links.map((link) => (
                <Link key={link.id} href={link.href} className="text-black">
                  <li className=" rounded p-1">{link.name}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;