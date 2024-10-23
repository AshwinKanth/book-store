import { IoTrashBin } from "react-icons/io5";
import { FaRegMinusSquare, FaPlusSquare } from "react-icons/fa";
import AppContext from "../../Context/AppContext"
import "./index.css"


const CartItem = (props) => (

    <AppContext.Consumer>
        {value => {
            const { removeCartItem, IncrementCartItemQuantity, decrementCartItemQuantity } = value

            const { cartItemDetails } = props
            const { image, price, title, quantity, isbn13 } = cartItemDetails

            const onDecrement = () => {
                decrementCartItemQuantity(isbn13)
            }

            const onIncrement = () => {
                IncrementCartItemQuantity(isbn13)
            }

            const onRemoveCartItem = () => {
                removeCartItem(isbn13)
            }

            return (
                <li className='cart-item'>
                    <img src={image} alt={title} className='cart-product-image'/>
                    <div className='cart-item-details-container'>
                            <p className='cart-product-title'>{title}</p>
                        <div className='cart-quantity-container'>
                            <button className='quantity-controller-button' type='button' onClick={onDecrement}>
                                <FaRegMinusSquare size={20}/>
                            </button>
                            <p className='cart-quantity'>{quantity}</p>
                            <button className='quantity-controller-button' type='button' onClick={onIncrement}>
                                <FaPlusSquare size={20}/>
                            </button>
                        </div>
                        <div className='total-price-remove-container'>
                            <p className='cart-total-price'>{price} /-</p>
                            <button className='remove-button' type='button' onClick={onRemoveCartItem}>
                                Remove
                            </button>
                        </div>
                    </div>
                    <button className='delete-button' type='button' onClick={onRemoveCartItem}>
                    <IoTrashBin  size={20} />
                    </button>
                </li>
            )
        }}
    </AppContext.Consumer>
)

export default CartItem