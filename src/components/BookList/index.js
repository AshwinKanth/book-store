import { Component } from "react";
import Header from "../Header";
import BookItem from "../BookItem";

import "./index.css"


class BookList extends Component {
    state = { booksData: [] }

    componentDidMount() {
        this.getBooksData()
    }

    getBooksData = async () => {
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
                isbn13: eachBook.isbn13
            }))
            this.setState({ booksData: updatedData })
        }
    }

    renderBooks = () => {
        const { booksData } = this.state

        return (
            <>
                <h1 className="booksHeading">Books</h1>
                <ul className="booksList-container">
                    {booksData.map(each => (
                        <BookItem bookItemData={each} key={each.id} />
                    ))}
                </ul>
            </>
        )
    }

    render() {
        return (
            <>
                <Header />
                <div className="bookListBg-conatiner">
                    {this.renderBooks()}
                </div>
            </>
        )
    }
}

export default BookList