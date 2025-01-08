import React from "react";

interface SubtitleProps {
  title: string;
}

export default function Subtitle({ title }: SubtitleProps) {
  return (
    <>
      <h1 className="text-5xl font-medium tracking-tight text-center uppercase">
        {title}
      </h1>
    </>
  );
}
