import Menu from "./menu";
import { useEffect, useState } from "react";
import axios from 'axios';
import Gallery from "./gallery";


const CarsTwo = () => {
const [cars, setCars] = useState([]);


useEffect(() => {

    const fetchData = async () => {
        const { data } = await axios.get('http://localhost:3000/otomobil');
        setCars(data);
    }
    fetchData();


    return () => { }
}, []);



    return (
        <div >
            <Menu />

            {cars.map((car, index) =>
                <Gallery carName={car.id}
                    carAge={car.marka}
                    carImage={car.imageName}
                    carPrice={car.fiyat}
                    carModel={car.model}
                    display={false}
                    link={car.link}
                    key={index} />
            )}

        </div>


    )
};
export default CarsTwo;