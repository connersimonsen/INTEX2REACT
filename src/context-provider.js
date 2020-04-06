import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import produce from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        
        this.actions = {
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            getCartTotal: this.getCartTotal,
            clearCart: this.clearCart,
        }

        this.state = {
            categories: {},
            products: {},
            cart: {},
            cartCount: 0,
            cartTotal: 0,
            recent: {},
        }
    }

    addToCart = (pid) => {
        this.setState(state => produce(state, draft => {
            if (draft.cart[pid]) {
                draft.cart[pid] += 1
            } else {
                draft.cart[pid] = 1
            }
            draft.cartCount = 0
            for(var item in draft.cart) {
                draft.cartCount += draft.cart[item]
            }
        }))
        this.getCartTotal()
    }

    removeFromCart = (pid) => {
        this.setState(state => produce(state, draft => {
            delete draft.cart[pid]
            draft.cartCount = 0
            for(var item in draft.cart) {
                draft.cartCount += draft.cart[item]
            }
        }))
        this.getCartTotal() 
    }

    getCartTotal = () => {
        this.setState(state => produce(state, draft => {
            draft.cartTotal = 0
            var total = 0
            for (var item in draft.cart) {
                console.log('item', item)
                var subTotal = 0
                var product = draft.products[item]
                subTotal = (product.price * draft.cart[item]).toFixed(2)
                total = total + parseFloat(subTotal)
                total.toFixed(2)
            }
            draft.cartTotal = total.toFixed(2)
        }))
    }

    clearCart = () => {
        this.setState(produce(this.state, draft => {
            draft.cart = {}
            draft.cartCount = 0
        }))
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const catResp = await axios.get('http://localhost:8000/api/category/')
        const prodResp = await axios.get('http://localhost:8000/api/product/')

        catResp.data.forEach(element => {
            element.count = prodResp.data.filter(item => item.category.title === element.title).length
        });
        
        const prods = {}
        for(const p of prodResp.data) {
            prods[p.id] = p
        }
        

        this.setState({
            categories: catResp.data,
            products: prods
        })
    }

}
