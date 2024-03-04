
import { Carousel, CarouselContent, CarouselItem } from "@/shadui/components/ui/carousel"
import { cn } from "@/shadui/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import { ImageWithSkeleton } from "./ImageWithSkeleton"

export type ImageContent = { src: string, className: string }

export const ImageCarousel = (props: { className: string, images: ImageContent[] }) => {
  return <Carousel
    orientation="vertical"
    plugins={[
      Autoplay({
        delay: 2000,
        stopOnInteraction: false,
      }),
    ]}
  >
    <CarouselContent className={cn(props.className, "m-0 p-0")}>
      {
        props.images.map((image) => (
          <CarouselItem className={cn("w-full h-full", "m-0 p-2")} key={image.src}>
            <ImageWithSkeleton src={image.src} className={cn("w-full h-full", image.className, "rounded-lg")} />
          </CarouselItem>))
      }
    </CarouselContent>
  </Carousel>
}
