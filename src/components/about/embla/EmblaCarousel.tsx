import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import DotButton from "./EmblaCarouselDotButton";
import { useDotButton } from "./useDotButton";
interface EmblaCarouselProps {
  slides: string[];
  options?: EmblaOptionsType;
}

export default function EmblaCarousel({ slides, options }: EmblaCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { selectedIndex, scrollSnaps, onDotButtonClick} = useDotButton(emblaApi);

  const changePhoto = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") emblaApi?.scrollPrev();

    if (event.key === "ArrowRight") emblaApi?.scrollNext();
  }
  
  return (
    <div
      tabIndex={0}
      role="region"
      aria-label="Personal photo carousel"
      className="focus:outline-none"
      onKeyDown={changePhoto}
    >
      <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
        <div className="flex">
          {slides.map((image, index) => (
            <div className="min-w-0 flex-[0_0_100%]" key={index}>
              <img
                src={image}
                alt={`Personal ${index + 1}`}
                className="aspect-square h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`rounded-full border-0 focus:outline-none ${
                index === selectedIndex
                  ? "h-2.5 w-2.5 bg-blue-500"
                  : "h-2 w-2 bg-gray-300"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
      </div>
    </div>
  )
}