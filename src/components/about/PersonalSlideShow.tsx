import EmblaCarousel from "./embla/EmblaCarousel";
import { IMAGES } from "../../data/about"

export default function PersonalSlideShow() {
  return (
    <EmblaCarousel
      slides={IMAGES}
      options={{ loop: true }}
    />
  )
}