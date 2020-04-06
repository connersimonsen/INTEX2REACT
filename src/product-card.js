import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'


function productCard(props) {
    return(
        <bs.Col md="3">
            <bs.Card key={props.id} className="my-3">
                <Link to={"/product/" + props.product.id}>
                    <bs.Button variant="primary" className="position-absolute m-1" style={{top: "0", right: "0"}}>Details</bs.Button>
                </Link>
                
                <bs.Card.Img variant="top" src={"/media/products/" + props.product.filename + "-1.png"} />
                <bs.Card.Body>
                
                    <bs.Card.Title className="text-center">{props.product.name}</bs.Card.Title>
                    <bs.Card.Text className="text-center">
                        ${props.product.price}
                    </bs.Card.Text>
                    
                </bs.Card.Body>
            </bs.Card>
        </bs.Col>
    )                
}

export default productCard;