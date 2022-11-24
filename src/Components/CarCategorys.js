import React from "react";
import CarCard from "./CarCard";

const CarCategores = () => {
  return (
    <div className="main pl-4 pr-4 pb-20 px-4 md:px-8 lg:px-10 xl:px-40">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4  lg:grid-cols-3 xl:grid-cols-4 font-general">
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
      </div>
    </div>
  );
};

export default CarCategores;
