import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'



function Left(props) {
    
    const context = React.useContext(AppContext)
    const categories = {}
    const Camp_AR = Object.values(context.campaigns)
    const Cat_AR = Object.values(context.categories)
    let c = 0
    let cat = ""

    for (let p of Camp_AR) {        
        cat = p.category_id
        categories[cat] = (categories[cat] || 0) + 1
        c+=1
    }

    console.log(categories)

    const categoryHandler = (event) => {
        context.setSearch(false)
    }
    
    return(
        
        <bs.Nav defaultActiveKey="/home" className="flex-column">
        <Link style={{color: "#02075d"}} to="/" className="nav-link" onClick={categoryHandler}><h5>All Campaigns ({Camp_AR.length})</h5></Link>
        <bs.Nav defaultActiveKey="/home" className="flex-column text-dark">
                {Object.entries(categories).map( ([key, value]) => (      
                    <Link style={{color: "#02075d"}} key={key} to={`/category_id/${key}`} className="nav-link" onClick={categoryHandler}><h5>{key} ({value})</h5></Link>
                    )                                            
                
                )}
        </bs.Nav>
        </bs.Nav>
        
    )
}

export default Left;