import React from "react";
import Link from "next/link";

export default function Title() {
  return (
    <>
      <h1 className="text-5xl font-black tracking-tight text-center uppercase">
        <Link href="/"> Amandine Richelot </Link>
      </h1>
    </>
  );
}
