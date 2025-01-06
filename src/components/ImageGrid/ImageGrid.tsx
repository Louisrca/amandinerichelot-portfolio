import React from "react";
import * as imagesData from "@/data/dataset-image.json";

export default function ImageGrid() {
  return (
    <>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 border-2 border-gray-200 rounded-md">
        {imagesData?.images?.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="w-full block mb-2"
          />
        ))}
      </div>
    </>
  );
}
