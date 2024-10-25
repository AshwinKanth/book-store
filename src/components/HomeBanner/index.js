import { Component } from "react";
import Slider from 'react-slick'
import { Link } from "react-router-dom";
import { RotatingSquare } from "react-loader-spinner"

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "./index.css"

const apiStatusConstant = {
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
    initial: "INITIAL"
}



class HomeBanner extends Component {
    state = { homeBooksData: [], apiStatus: apiStatusConstant.initial, }

    componentDidMount() {
        this.getHomeBooksData()
    }

    getHomeBooksData = async () => {

        this.setState({ apiStatus: apiStatusConstant.inProgress })

        const apiUrl = "https://api.itbook.store/1.0/new"
        const options = {
            method: "GET"
        }

        const response = await fetch(apiUrl, options)

        if (response.ok === true) {
            const data = await response.json()
            const updatedBooksData = data.books.map(eachBook => ({
                image: eachBook.image,
                isbn13: eachBook.isbn13
            }))
            this.setState({ homeBooksData: updatedBooksData, apiStatus: apiStatusConstant.success })
        } else {
            this.setState({ apiStatus: apiStatusConstant.failure })
        }
    }

    renderLoadingView = () => (
        <div className="loading-container">
            <RotatingSquare
                visible={true}
                height="100"
                width="100"
                color="#fcf003"
                ariaLabel="rotating-square-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )

    renderFailureView = () => {
        <div className="no-books-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
                alt="failure view"
                className="no-books-image"
            />
            <h1 className="failureHeading">Oops! Something Went Wrong</h1>
            <p className="failureDescription">
                We cannot seem to find the page you are looking for
            </p>
            <button type="button" className="failureButton" onClick={this.getBookDetails}>
                Retry
            </button>
        </div>
    }

    getBooksSlider = () => {
        const { homeBooksData } = this.state

        var settings = {
            dots: false,
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

                    {homeBooksData.map(eachBook => (
                        <div key={eachBook.isbn13}>
                            <Link to={`/books/${eachBook.isbn13}`}>
                                <img src={eachBook.image} alt="" className="slider-image" />
                            </Link>
                        </div>
                    ))}

                </Slider>
            </div>
        )
    }

    renderHomeDetailsView = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstant.success:
                return this.getBooksSlider();
            case apiStatusConstant.inProgress:
                return this.renderLoadingView();
            case apiStatusConstant.failure:
                return this.renderFailureView()

            default:
                return null;
        }
    }

    render() {
        return (
            <div className="slider-container">
                {this.renderHomeDetailsView()}
            </div>
        )
    }
}

export default HomeBanner


