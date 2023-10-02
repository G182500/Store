import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  //flex-shrink-0 -> Elemento não deve encolher para se acomodar dentro de um contêiner
  //flex-grow-0 -> Elemento não deve crescer para se acomodar dentro de um contêiner

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="flex-shrink-0 flex-grow-0 min-w-0">Slide 1</div>
        <div className="flex-shrink-0 flex-grow-0 min-w-0">Slide 2</div>
        <div className="flex-shrink-0 flex-grow-0 min-w-0">Slide 3</div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
}
