import Banners from "@/components/Banners";
import CallToAction from "@/components/CallToAction";
import ServicesComponent from "@/components/ServiceComponent";
import { serviceList } from "@/constants/appdata";
import React from "react";

const Services = () => {
  return (
    <>
      <Banners
        img="/service-banner.jpg"
        title="Services"
        text="Experience elevated travel with Azaan: Where style, comfort, and saftey meet for every occassion. Travle in sophistication and peace of mind"
      />
      {serviceList?.map((service, index)=>(
<div key={index}>
    <ServicesComponent service={service}  />
</div>
      ))}
      <CallToAction />
    </>
  );
};

export default Services;
