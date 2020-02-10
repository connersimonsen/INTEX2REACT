import React from 'react'
import * as bs from 'react-bootstrap'
import PRODUCTS from './products'
import { useRouteMatch } from 'react-router-dom'
import ProductCard from './product-card'


function Home(props) {
    
    const match = useRouteMatch("/category/:slug")
    const productArray = []
    if (match !== null) {
        Object.entries(PRODUCTS).filter(function(product) {
        
            if (product[1].category === match.params.slug) {
                return productArray.push(product)
            }
            return null
            
        })
    } else {
        Object.entries(PRODUCTS).filter(function(product) {
            return productArray.push(product)
        })
    }
    
    
    return(
        <bs.Container fluid className="p-4">
            <bs.Row>
                
                {productArray.map(([id, product]) => {
                    return (
                        <ProductCard product={product} id={id} key={id} />
                    )
                })}

                
            </bs.Row>
        </bs.Container>
    )
}

export default Home;