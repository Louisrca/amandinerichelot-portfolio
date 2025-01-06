import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul className="flex justify-center space-x-32">
        <li className="font-thin text-gray-500 uppercase transition-all duration-100 hover:text-black hover:font-light">
          <Link href={"/"}>Works</Link>
        </li>
        <li className="font-thin text-gray-500 uppercase transition-all duration-100  hover:text-black hover:font-light">
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
}
