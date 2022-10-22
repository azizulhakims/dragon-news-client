import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assets/brands/IMG copy.jpeg'
import Brand2 from '../../../assets/brands/IMG.jpeg'

const BrandCarosel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        alt="First slide"
                    />

                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarosel;