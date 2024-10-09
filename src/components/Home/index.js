import { Component } from "react";
import { Link } from "react-router-dom"

import HomeBanner from "../HomeBanner"

import Header from "../Header";

import "./index.css"

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="home-container">
                    <HomeBanner />
                    <div className="description-container">
                        <p className="homeDescription">
                            A Bookstore Application is a digital platform that allows users to explore, buy,
                            and manage books effortlessly. Designed with both customers and sellers in mind,
                            the application offers a rich and personalized shopping experience. Users can browse
                            an extensive catalog of books, which are neatly organized by genre, author, or popularity.
                            Each listing includes detailed descriptions, reviews, ratings, and even sample previews to
                            help readers make informed choices.</p>
                        <Link to="/books">
                            <button type="button" className="exploreButton" >Explore</button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Home