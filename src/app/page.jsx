import CallToAction from "@/components/CallToAction";
import CarouselComponent from "@/components/Carousel";
import Explore from "@/components/ExploreSection/Explore";
import OurObjective from "@/components/OurObjective";
import Image from "next/image";

export default function Home() {
  return (
 <>
  <CarouselComponent />
  <div className="relative">
    <Explore />
    <CallToAction />
    <OurObjective />
  </div>
 </>
  );
}
