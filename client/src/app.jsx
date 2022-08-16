import React from "react";
import Home from "./home";
import Cars from "./cars";
import Aboutus from "./aboutus";
import Gallery from "./gallery";
import CarsTwo from "./carsTwo";


const App = ({ pageName }) => {

    const pageToShow = () => {
        if (pageName === 'Home') return <Home />;
        if (pageName === 'Cars') return <Cars />;
        if (pageName === 'About Us') return <Aboutus />;
        if (pageName === 'Ford')
            return <Gallery carName={'Ford'}
                carAge={12}
                carImage={'mondeo.png'}
                carPrice={'400.000 TL'}
                carModel={'Mondeo'}
                display={true}
                link={'/ford'}/>;

        if (pageName === 'Audi')
            return <Gallery carName={'Audi'}
                carAge={0}
                carImage={'audi1.jpg'}
                carPrice={'1.800.000 TL'}
                carModel={'A6'}
                display={true}/>;

        if (pageName === 'Bmw')
            return <Gallery carName={'Bmw'}
                carAge={0}
                carImage={'bmw.jpg'}
                carPrice={'1.799.000 TL'}
                carModel={'520d'}
                display={true}/>;

        if (pageName === 'Bentley')
            return <Gallery carName={'Bentley'}
                carAge={0}
                carImage={'bentley.jpg'}
                carPrice={'15.799.000 TL'}
                carModel={'continental'}
                display={true} />;

        if (pageName === 'carsTwo') return <CarsTwo />;
            

                

        if(pageName == 'Cars')
        return <Cars />;

        return <div>Not Found</div>;
    };
    return (
        <div>
            {pageToShow()}
        </div>
    )
};

export default App;
