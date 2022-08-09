import React from "react";
import Header from "./header";
import Menu from "./menu";

const Gallery = ({ carName, carImage, carPrice, carAge, carModel, display, link }) => {

    return (
        <div className="div-bottom-border">
        
        { (display) ? <Menu /> : <></> }

        <h1>{carName}</h1>
        <div className="row">
            <div className="col-sm-4">

                <a href={`${link}`}>
                    <img width={400}  height={200} src={`/static/images/${carImage}`}/>
                </a>
            </div>


            <div className="col-sm-4"> 

                <p>Name: {carName}</p>
                <p>Model: {carModel}</p>
                <p>Age: {carAge}</p>
                <p>Price: {carPrice}</p>

            </div>

        </div>
        </div>
    )
};

export default Gallery;