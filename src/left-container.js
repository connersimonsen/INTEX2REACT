import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PRODUCTS from './products'

const categories = {}
let total = 0
for (let p of Object.values(PRODUCTS)) {
        categories[p.category] = (categories[p.category] || 0) + 1
        
        total += 1
}

function Left(props) {
    
    
    
    return(
        
        <bs.Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/" className="nav-link">{'All Products (' + total + ')'}</Link>
        {Object.entries(categories).map((category, count) => {
            return (
            <Link to={"/category/" + category[0]} className="nav-link" key={count}>{category[0] + ' (' + category[1] +')'}</Link>
            )
        })} 
        </bs.Nav>
        
    )
}

export default Left;