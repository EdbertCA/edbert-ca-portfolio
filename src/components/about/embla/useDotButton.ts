import { useCallback, useEffect, useState } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (emblaApi: EmblaCarouselType | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onReInit();

    emblaApi.on("select", onSelect).on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect).off("reInit", onReInit);
    };
  }, [emblaApi]);
  
  return { selectedIndex, scrollSnaps, onDotButtonClick }
}
