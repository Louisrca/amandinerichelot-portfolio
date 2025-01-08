"use client";
import Image from "next/image";
import * as imagesData from "@/data/dataset-image.json";
import styles from "./ImageGrid.module.css";
import { v4 as uuidv4 } from "uuid";

interface ImageData {
  id: string;
  src: string;
  alt: string;
  order: number;
}

export default function ImageGrid() {
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="columns-3 sm:columns-3 lg:columns-3 gap-2 rtl">
      {imagesData.images?.map((image: ImageData) => (
        <div key={uuidv4()} className={styles.imagesContainer}>
          <Image
            onContextMenu={handleRightClick}
            src={image.src}
            alt={`${image.alt} - ${image.order}`}
            className={`${styles.images} w-full block mb-2 `}
            priority
            width={200}
            height={500}
          />
        </div>
      ))}
    </div>
  );
}
