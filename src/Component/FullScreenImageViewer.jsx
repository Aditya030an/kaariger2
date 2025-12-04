"use client";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

/**
 * props:
 *  - images: array of image URLs
 *  - activeIndex: number
 *  - setActiveIndex: fn
 *  - onClose: fn
 */
export default function FullScreenImageViewer({
  images = [],
  activeIndex = 0,
  setActiveIndex,
  onClose,
}) {
  const containerRef = useRef(null);

  const handleNext = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // keyboard handlers
  useEffect(() => {
    const onKey = (ev) => {
      if (ev.key === "Escape") onClose();
      if (ev.key === "ArrowRight") handleNext();
      if (ev.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  // click outside to close (click on overlay)
  const onOverlayClick = (e) => {
    if (e.target === containerRef.current) onClose();
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-black/75 flex items-center justify-center p-4"
      onClick={onOverlayClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10001] text-white text-2xl p-2 rounded hover:opacity-90"
        aria-label="Close"
      >
        <IoClose size={28} />
      </button>

      {/* Prev */}
      <button
        onClick={handlePrev}
        className="absolute left-4 z-[10001] text-white text-4xl p-2 rounded hover:opacity-90"
        aria-label="Previous"
      >
        <MdNavigateBefore size={36} />
      </button>

      {/* Next */}
      <button
        onClick={handleNext}
        className="absolute right-4 z-[10001] text-white text-4xl p-2 rounded hover:opacity-90"
        aria-label="Next"
      >
        <MdNavigateNext size={36} />
      </button>

      {/* Image container */}
      <div className="relative max-w-[1200px] w-full max-h-[90vh] flex items-center justify-center">
        <img
          src={images[activeIndex]}
          alt={`Preview ${activeIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain rounded-md shadow-lg"
          draggable={false}
        />
      </div>

      {/* small counter / thumbnails optional */}
      <div className="absolute bottom-6 z-[10001] text-white text-sm bg-black/40 px-3 py-1 rounded">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}
