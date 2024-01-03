import React from "react";
import "./home.css";
import img from "./images/samsungimage1.png"
import img_m from "./images/samsungimage1_mobile.png";
import img2 from "./images/Picture1.jpg"

import Slide from "./slide";
import Tabs1 from "./tabs";

const Homepage = () => {
    return <div>
        <div className="banner-container">
            <div className="image-container">
                <img src={img}></img>
            </div>
            <div className="image-container-m">
                <img src={img_m}></img>
            </div>
        </div>
        <div className="testimonial-slide">
            <Slide />
        </div>
        <div className="image-container">
            <img src={img2}></img>
        </div>
            <Tabs1 />

    </div>
}

export default Homepage;

// https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-n3-en/topbanner/find-n3-5120_1280.jpg?
// https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/find-n3-flip-en/topbanner/find-n3-flip-5120_1280-p.jpg?
// https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/finders-club/864_576.jpg?