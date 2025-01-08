import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul className="flex justify-center space-x-32 mt-6">
        <li className="font-light text-gray-500 uppercase transition-all duration-100 hover:text-black hover:font-normal">
          <Link href={"/"}>Works</Link>
        </li>
        <li className="font-light text-gray-500 uppercase transition-all duration-100  hover:text-black hover:font-normal">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}
