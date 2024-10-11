import { Component } from "react";

import Header from "../Header";

import { FaStar } from "react-icons/fa";

import "./index.css"


class BookDetails extends Component {
    state = { bookDetailsData: [] }

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
        url: data.url
    })

    getBookDetails = async () => {

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

            this.setState({ bookDetailsData: updatedBookData })

            console.log(bookData)

        }
    }


    renderBookDetails = () => {
        const { bookDetailsData } = this.state
        const { title, price, image, rating, desc, authors, publisher, subtitle, year, language, url } = bookDetailsData

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
                    <div className="buttons-container">
                        <button className="addBuyButton" type="button">Add To Cart</button>
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

    }

    render() {
        return (
            <div>
                <Header />
                <div className="bookDeatilsBg-conatiner">
                    {this.renderBookDetails()}
                </div>
            </div>
        )
    }
}

export default BookDetails