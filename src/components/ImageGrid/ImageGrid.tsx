"use client";
import React from "react";
import * as imagesData from "@/data/dataset-image.json";
import { v4 as uuidv4 } from "uuid";
import styles from "./ImageGrid.module.css";

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
            key={image.id + "---" + uuidv4()}
            onContextMenu={handleRightClick}
            src={image.src}
            alt={image.alt + "---" + image.order}
            className={`${styles.images} w-full block  mb-2 `}
          />
        ))}
      </div>
    </>
  );
}
