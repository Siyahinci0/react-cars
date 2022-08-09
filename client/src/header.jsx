import React from "react";

const Header = ({course,galleryName,date}) => {
    return (
        <div className="jumbotron jumbotronheight">
            <div className="row">
                <div className="col-12 col-sm-4 text-center">
                    <h6 className="text-uppercase">{date}</h6>
                    <h6 className="text-uppercase">{galleryName}</h6>
                </div>
                <div className="col-12 col-sm-8 text-lg-right">
                
                    <div className="row col-12 text-lg-right">

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;