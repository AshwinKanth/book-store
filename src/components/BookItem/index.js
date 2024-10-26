import { Component } from "react";
import AppContext from "../../Context/AppContext";
import { MdOutlineFavoriteBorder ,MdOutlineFavorite} from "react-icons/md";
import { Link } from "react-router-dom";

import "./index.css"


class BookItem extends Component {
    state={isFavourite: false}

    onClickFavourite = () => {
        this.setState(prevState => ({ isFavourite: !prevState.isFavourite }))
    }


    render() {
        const { isFavourite } = this.state
        const { bookItemData } = this.props
        const { title, price, image, isbn13, url } = bookItemData
        
        const bookTitleSize = title.slice(0, 25)
        return (
            <AppContext.Consumer>
                {value => {
                    const { addFavouriteItem, removeFavouriteItem} = value

                    const onClickAddFav = () => {
                        addFavouriteItem({ ...bookItemData })
                    }

                    const onRemoveFavItem = () => {
                        removeFavouriteItem(isbn13)
                    }

                    return (
                        <div className="bookItem-container">
                            <Link to={`/books/${isbn13}`} className="nav-link">
                                <li>
                                    <img src={image} alt={title} className="bookImage" />
                                    <p className="bookTitle">{bookTitleSize} ...</p>
                                    <p className="bookPrice">Price: <span className="priceSpan">{price}</span></p>
                                </li>
                            </Link>
                            <div className="bag-fav-container">
                                <button className="buyNowButton" type="button">
                                    <a className="buyNowLink" href={url} target="_blank" rel="noreferrer">Buy Now</a>
                                </button>
                                {isFavourite ? (
                                    <button type="button" className="favButton" onClick={onRemoveFavItem}>
                                        <MdOutlineFavorite size={20} color="#e31310" className="favIcon" onClick={this.onClickFavourite} />
                                    </button>
                                ) : (
                                    <button type="button" className="favButton" onClick={onClickAddFav}>
                                        <MdOutlineFavoriteBorder size={20} className="favIcon" onClick={this.onClickFavourite} />
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                }}
            </AppContext.Consumer>
        )
    }
}

export default BookItem