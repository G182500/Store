"use client";
//npm i embla-carousel-react classnames
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { PropsWithChildren, useState, useEffect } from "react";
import Dots from "./Dots";

type Props = PropsWithChildren & EmblaOptionsType;

export default function Carousel({ children }: Props) {
  const defaultOptions: EmblaOptionsType = {
    loop: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);

    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  const length = React.Children.count(children);

  return (
    <>
      <div className="w-full overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">{children}</div>
      </div>
      <Dots itemsLength={length} selectedIndex={selectedIndex} />
    </>
  );
}

/*CHAMADA DO COMPONENTE
<div className="p-4 w-3/4">
    <Carousel>
        {props.produtos.map((produto, index) => {
            return (
                <div key={index} className="relative h-60 flex-[0_0-100%]">
                    <div className="object-cover">
                        <ProductItem produto={produto} key={produto.id} />;
                    </div>
                </div>
            );
        })}
    </Carousel>
</div>
*/
