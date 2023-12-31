"use client";

import { useEffect, useState } from "react";
import Links from "./Links";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollThreshold = 20;

      setIsScrollingUp(prevScrollPos > currentScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const listItem = document.querySelectorAll("#landing-header li");
    const menuBackDrop: Element | null =
      document.querySelector("#menu-backdrop");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();
        if (menuBackDrop instanceof HTMLElement) {
          menuBackDrop.style.setProperty("--left", `${left}px`);
          menuBackDrop.style.setProperty("--top", `${top}px`);
          menuBackDrop.style.setProperty("--width", `${width}px`);
          menuBackDrop.style.setProperty("--height", `${height}px`);

          menuBackDrop.style.opacity = "1";
          menuBackDrop.style.visibility = "visible";
        }
      });

      item.addEventListener("mouseleave", () => {
        if (menuBackDrop instanceof HTMLElement) {
          menuBackDrop.style.opacity = "0";
          menuBackDrop.style.visibility = "hidden";
        }
      });
    });
  }, []);

  return (
    <header
      id="landing-header"
      className={`${
        isScrollingUp || prevScrollPos <= 0
          ? "fixed top-0 #0c0a09 slide-down-enter"
          : "hidden"
      } py-4 text-sm px-10 flex items-center w-full justify-between z-40 text-white backdrop-blur-sm ${
        isScrollingUp || prevScrollPos <= 0 ? "slide-down-enter-active" : ""
      }`}
    >
      <div className="flex flex-grow basis-0">
        <a href="#">
          <span className="sr-only">lilnait.dev Logo</span>
          logo
        </a>
      </div>
      <Links />
      <div className="flex flex-grow justify-end basis-0">
          LangButton
      </div>
      <div
        id="menu-backdrop"
        className={`
      absolute bg-radial-gradient bg-[#893aeaa0] backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10
    `}
      />
    </header>
  );
};

export default Navbar;
