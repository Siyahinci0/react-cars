import React from "react";
import Menu from "./menu";
import Header from "./header";
import cars from "./cars-data";
import Gallery from "./gallery";


const Cars = () => {

   return (
      <div >
         <Menu />

         { cars().map((car, index) => 
            <Gallery carName={car.carName}
               carAge={car.carAge}
               carImage={car.carImage} 
               carPrice={car.carPrice}
               carModel={car.carModel}
               display={false}
               link={car.link}
               key={index} />
)}

      </div>


   )
};

export default Cars;