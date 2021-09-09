import React from "react";

const Slider = () => {
    return(
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/slider_image1.jpg" className="d-block w-100 rounded-3" alt="slider_image"/>
                </div>
                <div className="carousel-item">
                    <img src="./images/slider_image2.jpg" className="d-block w-100 rounded-3" alt="slider_image"/>
                </div>
                <div className="carousel-item">
                    <img src="./images/slider_image3.jpg" className="d-block w-100 rounded-3" alt="slider_image"/>
                </div>
            </div>
        </div>
    );
}
export default Slider;