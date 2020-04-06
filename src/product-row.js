import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'


function ProductRow(props) {
    const context = React.useContext(AppContext)
    return(
        <tr>
            <td><bs.Image src={"/media/products/" + props.product.filename + "-1.png"} className="cartIcon" rounded></bs.Image></td>
            <td>{props.product.name}</td>
            <td>{context.cart[props.product.id]}</td>
            <td>{props.product.price}</td>
            <td>{(context.cart[props.product.id] * props.product.price).toFixed(2)}</td>
            <td>
                <bs.Button variant="primary" className='mt-2' onClick={e => { context.addToCart(1) }}><i className="far fa-trash-alt" style={{ color: "white" }}></i></bs.Button>
            </td>
        </tr>
    )                
}

export default ProductRow;