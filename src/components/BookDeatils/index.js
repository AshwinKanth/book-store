import { Component } from "react";
import { RotatingSquare } from "react-loader-spinner"
import { FaStar, FaRegMinusSquare, FaPlusSquare } from "react-icons/fa";

import AppContext from "../../Context/AppContext"
import Header from "../Header";


import "./index.css"

const apiStatusConstant = {
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
    initial: "INITIAL"
}


class BookDetails extends Component {
    state = { bookDetailsData: [], apiStatus: apiStatusConstant.initial, quantity: 1 }

    componentDidMount() {
        this.getBookDetails()
    }

    getFormattedData = (data) => ({
        title: data.title,
        image: data.image,
        desc: data.desc,
        price: data.price,
        rating: data.rating,
        publisher: data.publisher,
        authors: data.authors,
        subtitle: data.subtitle,
        year: data.year,
        language: data.language,
        url: data.url,
        isbn13: data.isbn13
    })

    getBookDetails = async () => {

        this.setState({ apiStatus: apiStatusConstant.inProgress })
        const { match } = this.props
        const { params } = match
        const { isbn13 } = params

        const apiUrl = `https://api.itbook.store/1.0/books/${isbn13}`
        const options = {
            method: "GET"
        }

        const bookResponse = await fetch(apiUrl, options)

        if (bookResponse.ok === true) {
            const bookData = await bookResponse.json()
            const updatedBookData = this.getFormattedData(bookData)

            this.setState({ bookDetailsData: updatedBookData, apiStatus: apiStatusConstant.success })
        } else {
            this.setState({ apiStatus: apiStatusConstant.failure })
        }
    }

    onClickQuantityIncrement = () => {
        this.setState(prevState => ({ quantity: prevState.quantity + 1 }))
    }

    onClickQuantityDecrement = () => {
        const { quantity } = this.state

        if (quantity > 1) {
            this.setState(prevState => ({ quantity: prevState.quantity - 1 }))
        }
    }


    renderBookDetails = () => (
        <AppContext.Consumer>
            {value => {
                const { addCartItem } = value

                const { bookDetailsData, quantity } = this.state
                const { title, price, image, rating, desc, authors, publisher, subtitle, year, language, url } = bookDetailsData

                const onClickAddCart = () =>{
                    addCartItem({...bookDetailsData,quantity})
                }

                return (
                    <div className="bookDetails-container">
                        <img src={image} alt={title} className="image" />
                        <div className="bookDetails">
                            <h1 className="title">{title}</h1>
                            <p className="description">{subtitle}</p>
                            <p className="description">{desc}</p>
                            <div className="price-rating-container">
                                <p className="price">{price}</p>
                                <hr className="hrBreak" />
                                <div className="rating-container">
                                    <p className="rating">{rating}</p>
                                    <FaStar color="#000" />
                                </div>
                            </div>
                            <div className="quantity-conatiner">
                                <button className="quantity-button" type="button" onClick={this.onClickQuantityDecrement}><FaRegMinusSquare size={20} /></button>
                                <p className="quantity">{quantity}</p>
                                <button className="quantity-button" type="button" onClick={this.onClickQuantityIncrement}><FaPlusSquare size={20} /></button>
                            </div>
                            <div className="buttons-container">
                                <button className="addBuyButton" type="button" onClick={onClickAddCart}>Add To Cart</button>
                                <button className="addBuyButton" type="button">
                                    <a className="buyNowLink" href={url} target="_blank" rel="noreferrer">Buy Now</a>
                                </button>
                            </div>
                            <p className="detailsText">Details</p>
                            <p className="author">Author : <span className="spanDetaila">{authors}</span></p>
                            <p className="publisher">Publisher : <span className="spanDetaila">{publisher}</span></p>
                            <p className="publisher">Published : <span className="spanDetaila">{year}</span></p>
                            <p className="publisher">Language : <span className="spanDetaila">{language}</span></p>
                        </div>
                    </div>
                )
            }}
        </AppContext.Consumer>
    )

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

    renderBookDetailsView = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstant.success:
                return this.renderBookDetails();
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
            <div>
                <Header />
                <div className="bookDeatilsBg-conatiner">
                    {this.renderBookDetailsView()}
                </div>
            </div>
        )
    }
}

export default BookDetails