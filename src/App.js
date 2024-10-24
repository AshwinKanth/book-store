import { Component } from 'react';
import {Route,Switch,Redirect } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import BookDetails from './components/BookDeatils';
import Cart from "./components/Cart"
import Checkout from './components/Checkout';
import OrderPlaced from './components/OrderPlaced';
import NotFound from "./components/NotFound"
import AppContext from './Context/AppContext';


import './App.css';


class App extends Component{
  state = {cartList:[]}


  removeCartItem = (isbn13) =>{
    const {cartList} = this.state
    const updatedCartList = cartList.filter(eachItem => eachItem.isbn13 !== isbn13)
    this.setState({cartList: updatedCartList})
  }

  removeAllCartItems = () =>{
    this.setState({cartList: []})
  }

  IncrementCartItemQuantity = (isbn13) =>{
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachItem =>{
        if (isbn13 === eachItem.isbn13){
          const updatedQuantity = eachItem.quantity + 1
          return {...eachItem, quantity: updatedQuantity}
        }
        return eachItem
      })
    }))
  }

  decrementCartItemQuantity = (isbn13) =>{
    const {cartList} = this.state
    const bookObject = cartList.find(eachItem => eachItem.isbn13 === isbn13)


    if (bookObject.quantity > 1){
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachItem => {
          if (isbn13 === eachItem.isbn13){
            const updatedQuantity = eachItem.quantity - 1
            return {...eachItem, quantity: updatedQuantity}
          }
          return eachItem
        })
      }))
    }else{
      this.removeCartItem(isbn13)
    }
  }

  addCartItem = (book) =>{
    const {cartList} = this.state
    const bookObject = cartList.find(eachItem => eachItem.isbn13 === book.isbn13)

    if (bookObject){
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (eachCartItem.isbn13 === bookObject.isbn13){
            const updatedQuantity = eachCartItem.quantity + book.quantity
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        })
      }))
    }else{
      const updatedCartList = [...cartList, book]
      this.setState({cartList: updatedCartList})
    }
  }

  render(){
    const {cartList} = this.state
    return(
      <AppContext.Provider
      value ={{
        cartList,addCartItem: this.addCartItem, removeCartItem: this.removeCartItem, removeAllCartItems: this.removeAllCartItems,
        IncrementCartItemQuantity: this.IncrementCartItemQuantity, decrementCartItemQuantity: this.decrementCartItemQuantity
      }}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/books" component={BookList}/>
          <Route exact path="/books/:isbn13" component={BookDetails}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/checkout" component={Checkout}/>
          <Route exact path="/orderSuccess" component={OrderPlaced} />
          <Route exact path="/not-found" component={NotFound}/>
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
        
    )
  }
}



export default App;
