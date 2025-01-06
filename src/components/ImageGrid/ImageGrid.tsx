import React from "react";
import styles from "./ImageGrid.module.css";
import * as imagesData from "@/data/dataset-image.json";

export default function ImageGrid() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {imagesData?.images?.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`${styles.image} object-cover w-full h-full`}
          />
        ))}
      </div>
    </>
  );
}
