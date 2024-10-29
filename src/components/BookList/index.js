import { Component } from "react";
import { RotatingSquare } from "react-loader-spinner"

import { IoSearchCircle,IoFilterSharp } from "react-icons/io5";

import Header from "../Header";
import BookItem from "../BookItem";
import PriceRange from "../PriceRange";

import "./index.css"

const apiStatusConstant = {
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
    initial: "INITIAL"
}

let priceRangeExtreme = [0, 100];


class BookList extends Component {
    state = { booksData: [], searchInput: "", priceRangeValue: [0, 0], apiStatus: apiStatusConstant.initial, priceToggle: true }

    componentDidMount() {
        this.getBooksData()
    }

    getBooksData = async () => {

        this.setState({ apiStatus: apiStatusConstant.inProgress })
        const { searchInput } = this.state

        let apiUrl;

        if (searchInput === "") {
            apiUrl = "https://api.itbook.store/1.0/new"
        } else {
            apiUrl = `https://api.itbook.store/1.0/search/${searchInput}`
        }

        const options = {
            method: "GET"
        }

        const response = await fetch(apiUrl, options)


        if (response.ok === true) {
            const data = await response.json()
            const priceRangeExtreme = this.getPriceRange(data.books)
            const updatedData = data.books.map(eachBook => ({
                title: eachBook.title,
                image: eachBook.image,
                price: eachBook.price,
                url: eachBook.url,
                isbn13: eachBook.isbn13
            }))
            this.setState({ booksData: updatedData, priceRangeValue: priceRangeExtreme, apiStatus: apiStatusConstant.success })
        } else {
            this.setState({ apiStatus: apiStatusConstant.failure })
        }
    }

    getPriceRange = (booksData) => {
        let [minPrice, maxPrice] = [0, 0]
        booksData.map((eachBook) => {
            const price = parseFloat(eachBook.price.slice(1))
            if (price < minPrice) {
                minPrice = price;
            } else if (price > maxPrice) {
                maxPrice = price;
            }
            return null;
        })
        priceRangeExtreme = [Math.round(minPrice), Math.round(maxPrice)]
        return priceRangeExtreme
    }

    filterBooksByPriceRange = () => {
        const { booksData, priceRangeValue } = this.state
        const filteredBooks = booksData.filter((eachBook) => {
            const price = parseFloat(eachBook.price.slice(1))
            const isPriceInRange = price >= priceRangeValue[0] && price <= priceRangeValue[1]
            return isPriceInRange
        })
        return filteredBooks
    }

    onChangeSliderPosition = (sliderPositions) => {
        this.setState({ priceRangeValue: sliderPositions })
    }

    onChangeSearchInput = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    onEnterSearchInput = (event) => {
        if (event.key === 'Enter') {
            this.getBooksData()
        }
    }

    onClickSearchIcon = () => {
        this.getBooksData()
    }

    renderSearchInput = () => {
        const { searchInput } = this.state

        return (
            <div className="search-container">
                <IoSearchCircle size={20} onClick={this.onClickSearchIcon} />
                <input type="search" className="searchInput" value={searchInput} onChange={this.onChangeSearchInput} onKeyDown={this.onEnterSearchInput} placeholder="Search Books" />
            </div>
        )
    }


    renderBooks = () => {
        const { booksData } = this.state

        const priceFilteredBooks = this.filterBooksByPriceRange()

        return (
            <>
                {booksData.length > 0 ? (
                    <ul className="booksList-container">
                        {priceFilteredBooks.map(each => (
                            <BookItem bookItemData={each} key={each.id} />
                        ))}
                    </ul>
                ) : (
                    <div className="no-book-view">
                        <img
                            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                            className="no-book-img"
                            alt="no book"
                        />
                        <h1 className="no-book-heading">No Book Found</h1>
                        <p className="no-book-description">
                            We could not find any books.
                        </p>
                    </div>

                )}
            </>
        )
    }


    renderLoadingView = () => (
        <div className="loading-container">
            <RotatingSquare
                height="100"
                width="100"
                color="#fcf003"
                ariaLabel="rotating-triangles-loading"
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
            <button type="button" className="failureButton" onClick={this.getBooksData}>
                Retry
            </button>
        </div>
    }


    renderBooksListView = () => {
        const { apiStatus } = this.state

        switch (apiStatus) {
            case apiStatusConstant.success:
                return this.renderBooks();
            case apiStatusConstant.inProgress:
                return this.renderLoadingView();
            case apiStatusConstant.failure:
                return this.renderFailureView()
            default:
                return null;
        }
    }

    onClickPriceFilter = () => {
        const { priceToggle } = this.state
        this.setState({ priceToggle: !priceToggle })
    }

    render() {
        const { priceRangeValue, priceToggle } = this.state
        return (
            <>
                <Header />
                <div className="bookListBg-conatiner">
                    <div className="books-search-container">
                        <h1 className="booksHeading">Books</h1>
                        {this.renderSearchInput()}
                    </div>
                    <div className="priceRange-container">
                        <span className="filterSpan"> <IoFilterSharp /> Filter By <button className="priceFilter" onClick={this.onClickPriceFilter}> Price</button></span>
                        {priceToggle ? (
                            ""
                        ) : (
                            <PriceRange
                                sliderExtremes={priceRangeExtreme}
                                sliderPositions={priceRangeValue}
                                onChangeSliderPosition={this.onChangeSliderPosition}
                            />
                        )}
                    </div>
                    {this.renderBooksListView()}
                </div>
            </>
        )
    }
}

export default BookList
