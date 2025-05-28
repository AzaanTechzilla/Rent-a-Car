import CarouselComponent from "@/components/Carousel";
import Explore from "@/components/ExploreSection/Explore";
import Image from "next/image";

export default function Home() {
  return (
 <>
  <CarouselComponent />
  <div className="relative">
    <Explore />
  </div>
 </>
  );
}
