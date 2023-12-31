import React from "react";
import { testimonials } from "./testimonials";
import  Carousel  from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./slide.css";

const Slide = ()=>{

    

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    


    

    return <Carousel responsive={responsive} className="slide-container" infinite>
        {
            testimonials.map((testimonial)=>{
                return <div className="testimonial-container">
                    <p style={{fontWeight:"bolder"}}>{testimonial.name}</p>
                    <p  >{testimonial.rating}</p>
                    <p >{testimonial.review}</p>
                </div>
            })
        }
    </Carousel> ;
}

export default Slide;