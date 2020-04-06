import React from 'react'
import Table from 'react-bootstrap/Table';
import * as bs from 'react-bootstrap'
import AppContext from './context'
import { Link } from 'react-router-dom'


function ShoppingCart(props) {

    const context = React.useContext(AppContext)
    const cartProducts = []
    Object.keys(context.cart).map(id => {
        cartProducts.push(context.products[id])
    })
    console.log(context)
    return (
        <bs.Container fluid className="p-4">
            <h1 className="text-center">Shopping Cart</h1>
            &nbsp;
            <bs.Row noGutters>
                <bs.Col>
                    {Object.keys(context.cart).length > 0 ?
                        <div>
                            <Table hover className="tableCart">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Extended</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartProducts.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                <td><bs.Image src={"/media/products/" + product.filename + "-1.png"} className="cartIcon" rounded></bs.Image></td>
                                                <td>{product.name}</td>
                                                <td>{context.cart[product.id]}</td>
                                                <td>${product.price}</td>
                                                <td>${(context.cart[product.id] * product.price).toFixed(2)}</td>
                                                <td>
                                                    <bs.Button variant="primary" className='mt-2' onClick={e => { context.removeFromCart(product.id) }}><i className="far fa-trash-alt" style={{ color: "white" }}></i></bs.Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                                <thead>
                                    <th></th>
                                    <th>Total</th>
                                    <th></th>
                                    <th></th>
                                    <th>${context.cartTotal}</th>
                                    <th></th>
                                </thead>
                            </Table>
                            <div className="text-center mt-4">
                                <Link to="/checkout" className="btn btn-success d-inline-flex align-items-center">
                                    Checkout
                            </Link>
                            </div>
                        </div>
                        :
                        <h4 style={{ textAlign: 'center' }}>There are no products in your cart.</h4>
                    }
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )


}

export default ShoppingCart;