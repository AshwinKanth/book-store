import { Component } from "react";

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css"



class HomeBanner extends Component {

    getBooksSlider = () => {
        var settings = {
            dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4000,
                pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="image-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://itbook.store/img/books/9781804612569.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781617291609.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781491999226.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781491985571.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781617294136.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781804617007.png" alt="" className="carouselImage" />
                    </div>
                </Slider>
            </div>
        )
    }

    render() {
        return (
            <div className="slider-container">
                {this.getBooksSlider()}
            </div>
        )
    }
}

export default HomeBanner