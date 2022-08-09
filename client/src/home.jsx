import React from "react";
import Header from "./header";
import Menu from "./menu";

const Home = () => {

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (

        <div>
            <Menu />
            <Header course={"Gallery"} galleryName={"Science Gallery"} date={today} />
            <div className="container">
                <div className="row">
                    <div className="col margintopbottom">
                        <h2>Home</h2>
                        <h6 className="margintopbottom20">
                        Mission
“If we won’t drive it and put it in our own driveway, we won’t put it on our lot!”

KC Car Gallery is dedicated in providing the ultimate automobile buying experience. KC Car Gallery is your #1 source for buying a quality pre-owned vehicles. We have extensive relationships in the dealer community allowing us to purchase a wide variety of lease returns and new car trades at exceptional values. This enables KC Car Gallery to pass along huge savings on the highest quality vehicles of your choice. In addition, we offer a full array of financing options to meet your needs.
At our website, you can take advantage of several Internet technologies in the comfort of your home. Remember, if you need to talk to us, we are only a phone call away. Our departments (Sales, Finance, and the Business office) are available to help you with all your automobile needs. Feel free to come by the store any time to meet us in person. We invite you to take a tour of our facility and enjoy a pressure free car buying experience.
                        </h6>
                    </div>
                </div>
            </div>
            
        </div>

    )
};

export default Home;