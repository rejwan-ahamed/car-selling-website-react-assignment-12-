import React from "react";
import CarCard from "./CarCard";

const CarCategores = () => {
  return (
    <div className="main pl-40 pr-40 pb-20">
      <div className="grid grid-cols-4 gap-2  font-general">
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
        <CarCard></CarCard>
      </div>
    </div>
  );
};

export default CarCategores;
