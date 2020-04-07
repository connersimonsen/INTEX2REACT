import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'



function Left(props) {
    
    const context = React.useContext(AppContext)
    
    return(
        
        <bs.Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/" className="nav-link">All Products ()</Link>
        {console.log(context.campaigns)}
        {/* {Object.entries(context.categories).map((category) => {
            return (
            <Link to={"/category/" + category[1].title} className="nav-link" key={category[1].title}>{category[1].title + ' (' + category[1].count +')'}</Link>
            )
        })}  */}
        </bs.Nav>
        
    )
}

export default Left;