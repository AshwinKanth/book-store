import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

import "./index.css"


const BookItem = (props) => {
    const { bookItemData } = props
    const { title, price, image, isbn13, url } = bookItemData

    console.log(url)

    const bookTitleSize = title.slice(0, 25)

    return (
        <div className=" bookItem-container">
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
                <button className="favButton" type="button"><MdOutlineFavoriteBorder size={25} /></button>
            </div>
        </div>
    )
}

export default BookItem