import React from "react";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-5xl font-black tracking-tight text-center uppercase">
        {title}
      </h1>
    </>
  );
}
