import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FImage from '../../media/daniel-bryan-edge-roman-reigns-040921-wwe-ftr_1h5gfzmhmi34b1rsgnltvgytrd.jpg';
import SImage from '../../media/wwecrownjewel2022-645x340.jpg';
import TImage from '../../media/vw9u9.jpg';

export default function CarouselBox(){
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.bleacherreport.com/image/upload/v1659038214/nrsa5evd3z9wxy78wsev.jpg"
                alt="Third slide"
                width={500} height={500}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/3736505.jpg"
                alt="Second slide"
                width={500} height={500}
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.mykhel.com/img/2022/01/wwe-rumble-2022-poster-1643357165.jpg"
                alt="First slide"
                width={500} height={500}
                />
            </Carousel.Item>
    </Carousel>
    )
}