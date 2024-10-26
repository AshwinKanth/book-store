import { Link } from "react-router-dom"
import { IoCloseCircleSharp } from "react-icons/io5";

import AppContext from "../../Context/AppContext";

import './index.css'


const FavouriteItem = (props) => {
    const { favBookData } = props
    const { title, price, image, isbn13 } = favBookData

    const bookTitleSize = title.slice(0, 25)

    return (
        <AppContext.Consumer>
            {value => {
                const { removeFavouriteItem } = value

                const onRemoveFavItem = () => {
                    removeFavouriteItem(isbn13)
                }

                return (
                    <li className='bookItem-container favItem'>
                            <button onClick={onRemoveFavItem} className="removeFavButton">
                                <IoCloseCircleSharp size={20} />
                            </button>
                        <Link className="favNav-link" to={`/books/${isbn13}`}>
                            <img src={image} alt={title} className='bookImage' />
                            <h1 className='bookTitle'>{bookTitleSize}...</h1>
                            <p className="bookPrice">Price: <span className="priceSpan">{price}</span></p>
                        </Link>
                    </li>
                )
            }}
        </AppContext.Consumer>
    )
}


export default FavouriteItem