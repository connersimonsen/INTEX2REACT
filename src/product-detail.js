import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
//import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'


function ProductDetails(props) {

    const context = React.useContext(AppContext)
    const [imgIdx, setImgIdx] = React.useState(1);
    
    const match = useRouteMatch("/product/:slug")
    let product = context.products[match.params.slug]
    console.log(context.cart)
    console.log(product)
    if (product == null) {
        return (
            <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <bs.Col>
                    <h1 className="text-center">Product Not Found</h1>
                </bs.Col>
            </bs.Row>
        </bs.Container>
        )
    } else {
        return(
            <bs.Container fluid className="p-4">
                <bs.Row>
                    <bs.Col md="7">
                        <h1 style={{display: 'inline'}}>{product.name}</h1>
                        <bs.Button type="button" variant="warning" className='float-right mt-2' onClick={e => {context.addToCart(product.id)}}>Add to Cart</bs.Button>
                        <h2>${product.price}</h2>
                        <p>{product.description}</p>
                    </bs.Col>
                    <bs.Col md="5">
                        <bs.Row>
                            <bs.Col md="12">
                            <bs.Image src={"/media/products/" + product.filename + "-" + imgIdx + ".png"} className="detailImg float-right" rounded></bs.Image>
                            </bs.Col>
                        </bs.Row>
                        <bs.Row>
                            <bs.Col md="12">
                                <bs.Image src={"/media/products/" + product.filename + "-4.png"} className="detailIcon float-right mr-1 mt-1" rounded onMouseOver={() => setImgIdx(4)} onMouseOut={() => setImgIdx(1)}></bs.Image>
                                <bs.Image src={"/media/products/" + product.filename + "-3.png"} className="detailIcon float-right mr-1 mt-1" rounded onMouseOver={() => setImgIdx(3)} onMouseOut={() => setImgIdx(1)}></bs.Image>
                                <bs.Image src={"/media/products/" + product.filename + "-2.png"} className="detailIcon float-right mr-1 mt-1" rounded onMouseOver={() => setImgIdx(2)} onMouseOut={() => setImgIdx(1)}></bs.Image>
                                <bs.Image src={"/media/products/" + product.filename + "-1.png"} className="detailIcon float-right mr-1 mt-1" rounded onMouseOver={() => setImgIdx(1)} onMouseOut={() => setImgIdx(1)}></bs.Image>
                            </bs.Col>
                        </bs.Row>
                    
                        
                    </bs.Col>
                </bs.Row>
                <bs.Row>
                    
                </bs.Row>
                
            </bs.Container>
        )   
    }
                 
}

export default ProductDetails;