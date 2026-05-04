"use client";

import { useState } from "react";

type ProductGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="grid gap-3">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-lg"
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-strong)",
          boxShadow: "0 24px 68px rgba(0,0,0,0.34)",
        }}
      >
        <div
          role="img"
          aria-label={`Imagem principal de ${productName}`}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedImage})` }}
        />
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
        {images.map((image, index) => {
          const selected = image === selectedImage;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              aria-label={`Ver imagem ${index + 1} de ${productName}`}
              aria-pressed={selected}
              onClick={() => setSelectedImage(image)}
              className="aspect-square overflow-hidden rounded-lg transition-all duration-200"
              style={{
                border: selected
                  ? "2px solid var(--yellow)"
                  : "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <span
                className="block h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
