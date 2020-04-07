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
        cat = !Cat_AR[c] ? "Other" : Cat_AR[c].title
        categories[cat] = (categories[cat] || 0) + 1
        c+=1
    }
    
    return(
        
        <bs.Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/" className="nav-link"><h5>All Campaigns ({Camp_AR.length})</h5></Link>
        <bs.Nav defaultActiveKey="/home" link="black" className="flex-column text-dark">
                {Object.entries(categories).map( ([key, value]) => (      
                    <Link style={{color: "black"}} key={key} to={`/category/${key}`} className="nav-link">{key} ({value})</Link>
                    )                                            
                
                )}
        </bs.Nav>
        </bs.Nav>
        
    )
}

export default Left;