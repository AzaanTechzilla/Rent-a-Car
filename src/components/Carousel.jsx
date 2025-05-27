'use client'
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { profile } from "@/constants/appdata";
import Autoplay from "embla-carousel-autoplay";

const CarouselComponent = () => {
  return (
    <>
      <Carousel plugins={
        Autoplay({
        delay:2000
      })}>
        <CarouselContent>
          {profile?.map((items, index)=>(
            <CarouselItem key={index} style={{backgroundImage:`url(${items.img})` }} className='w-full h-full bg-cover bg-center pt-5 bg-no-repeat relative pointer-events-none'>

            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default CarouselComponent;
