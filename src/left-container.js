import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'



function Left(props) {
    
    const context = React.useContext(AppContext)
    const categories = {}
    const Camp_AR = Object.values(context.campaigns)
    let cat = ""

    for (let p of Camp_AR) {        
        cat = p.category_id
        categories[cat] = (categories[cat] || 0) + 1
    }

    const categoryHandler = (event) => {
        context.setSearch(false)
    }
    
    return(
        <bs.Nav defaultActiveKey="/home" className="flex-column">
        <Link style={{textDecoration: 'inherit', color: 'inherit'}} to="/" className="nav-link"><h3>Categories</h3></Link>
        <Link style={{textDecoration: 'inherit', color: 'inherit'}} to="/" className="nav-link hvr-grow" onClick={categoryHandler}><h6>All Campaigns ({Camp_AR.length})</h6></Link>
        <bs.Nav defaultActiveKey="/home" className="flex-column text-dark">
                {Object.entries(categories).map( ([key, value]) => (      
                    <Link style={{textDecoration: 'inherit', color: 'black'}} key={key} to={`/category_id/${key}`} className="nav-link hvr-grow linkColor" onClick={categoryHandler}><h6>{key} ({value})</h6></Link>
                    )                                            
                
                )}
        </bs.Nav>
        </bs.Nav>
        
    )
}

export default Left;