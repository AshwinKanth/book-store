import { Component } from "react";
import { RotatingSquare } from "react-loader-spinner"

import { IoSearchCircle } from "react-icons/io5";

import Header from "../Header";
import BookItem from "../BookItem";

import "./index.css"

const apiStatusConstant = {
    success: "SUCCESS",
    inProgress: "INPROGRESS",
    failure: "FAILURE",
    initial: "INITIAL"
}


class BookList extends Component {
    state = { booksData: [], searchInput: "",  apiStatus: apiStatusConstant.initial}

    componentDidMount() {
        this.getBooksData()
    }

    getBooksData = async () => {

        this.setState({ apiStatus: apiStatusConstant.inProgress })

        const apiUrl = "https://api.itbook.store/1.0/new"
        const options = {
            method: "GET"
        }

        const response = await fetch(apiUrl, options)

        if (response.ok === true) {
            const data = await response.json()
            const updatedData = data.books.map(eachBook => ({
                title: eachBook.title,
                image: eachBook.image,
                price: eachBook.price,
                url: eachBook.url,
                isbn13: eachBook.isbn13
            }))
            this.setState({ booksData: updatedData, apiStatus: apiStatusConstant.success })
        }else {
             this.setState({ apiStatus: apiStatusConstant.failure })
}
    }

    onChangeSearchInput = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    renderSearchInput = () => {
        const { searchInput } = this.state

        return (
            <div className="search-container">
                <IoSearchCircle size={20} />
                <input type="search" className="searchInput" value={searchInput} onChange={this.onChangeSearchInput} placeholder="Search Books" />
            </div>
        )
    }

    renderBooks = () => {
        const { booksData, searchInput } = this.state

        const searchResults = booksData.filter(each =>
            each.title.toLowerCase().includes(searchInput.toLowerCase()))

        return (
            <>
                {searchResults.length > 0 ? (
                    <ul className="booksList-container">
                        {searchResults.map(each => (
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

    render() {
        return (
            <>
                <Header />
                <div className="bookListBg-conatiner">
                    <div className="books-search-container">
                        <h1 className="booksHeading">Books</h1>
                        {this.renderSearchInput()}
                    </div>
                    {this.renderBooksListView()}
                </div>
            </>
        )
    }
}

export default BookList
