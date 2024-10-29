import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import FavouriteItem from "../FavouriteItem"
import AppContext from '../../Context/AppContext'
import "./index.css"

const Favourites = () => (
    <AppContext.Consumer>
        {value => {
            const { favouriteList } = value

            const showEmptyView = favouriteList.length === 0

            return (
                <>
                    <Header />
                    <div className='fav-container'>
                        {showEmptyView ? (
                            <div className="fav-empty-view-container">
                                <img
                                    src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1729924446/DALL_E_2024-10-26_11.55.28_-_An_icon_for_a_favorite_book_designed_in_a_clean_modern_style._Depict_a_sleek_open_book_with_a_small_heart_symbol_above_or_integrated_subtly_withou_a6abcn.png"
                                    className="fav-empty-img"
                                    alt="cart empty"
                                />
                                <h1 className="cart-empty-heading">Your Favourites Is Empty</h1>

                                <Link to="/">
                                    <button type="button" className="exploreButton">
                                        Explore
                                    </button>
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <h1 className='fav-heading'>Favourites</h1>
                            <ul className='fav-list'>
                                {favouriteList.map(eachCartItem => (
                                    <FavouriteItem key={eachCartItem.id} favBookData={eachCartItem} />
                                ))}
                            </ul>
                            </div>
                        )}
                    </div>
                </>
            )
        }}
    </AppContext.Consumer>
)

export default Favourites