import { useEffect, useState } from "react";
import { IMAGES } from "../../data/about"

export default function PersonalSlideShow() {
  const [index, setIndex] = useState(0);

  const goNext = () => setIndex((i) => (i + 1) % IMAGES.length);
  const goPrev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") goPrev();

      if (event.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [])
  
  return (
    <div>
      <img
        src={IMAGES[index]}
        alt="Personal"
        className="rounded-3xl aspect-square h-full w-full object-cover"
      />

      <div className="flex items-center justify-center gap-2 mt-4">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full ${
              i === index ? "h-2.5 w-2.5 bg-blue-500" : "h-2 w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}