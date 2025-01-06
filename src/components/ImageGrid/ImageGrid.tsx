"use client";
import React from "react";
import * as imagesData from "@/data/dataset-image.json";

export default function ImageGrid() {
  // const sortedImages = imagesData?.images?.sort((a, b) => a.order - b.order);
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="columns-2 sm:columns-2 lg:columns-3 gap-2 rtl ">
        {imagesData?.images?.map((image) => (
          <img
            key={image.id}
            onContextMenu={handleRightClick}
            src={image.src}
            alt={image.alt + "---" + image.order}
            className="w-full block  mb-2 transition-opacity duration-500 hover:opacity-25 "
          />
        ))}
      </div>
    </>
  );
}
