import React from "react";
import { testimonials } from "./testimonials";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import "./slide.css";
import RatingStars from "react-rating-stars-component";
// import CustomLeftArrow from "./arrows/customLeftArrow";
// import CustomRightArrow from "./arrows/customRightArrow";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const Slide = () => {

    
    // const CustomRightArrow = ()=>{
    //     return <div onClick={onclick}>
    //         <ChevronRightIcon style={{ position:"absolute" , right:"0" , transform:"scale(1.5)"}}/> 
    //     </div>
    
    // }

    // const CustomLeftArrow = ()=>{
    //     return <div>

    //     </div>
    // }
    

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






    return <Carousel
        responsive={responsive}
        className="slide-container"
        infinite
        
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        >
        {
            testimonials.map((testimonial) => {
                return <div className="testimonial-container">
                    <p style={{ fontWeight: "bolder" }}>{testimonial.name}</p>
                    <div className="rating-container">
                        <RatingStars
                            count={5}
                            size={24}
                            value={testimonial.rating}
                            edit={false}
                            isHalf={true}
                        />
                        <p  >{testimonial.rating}</p>
                    </div>
                    <p >{testimonial.review}</p>
                </div>
            })
        }
    </Carousel>;
}

export default Slide;