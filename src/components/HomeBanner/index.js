import { Component } from "react";

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css"



class HomeBanner extends Component {

    getBooksSlider = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true
        };
        return (
            <div className="image-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://itbook.store/img/books/9781491954249.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781491954249.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781491954249.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781491954249.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781491954249.png" alt="" className="carouselImage" />
                    </div>
                    <div>
                        <img src="https://itbook.store/img/books/9781491954249.png" alt="" className="carouselImage" />
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