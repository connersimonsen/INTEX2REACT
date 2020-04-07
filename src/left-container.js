import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppContext from './context'



function Left(props) {
    
    const context = React.useContext(AppContext)
    const categories = {}
    const Camp_AR = Object.values(context.campaigns)
    const Cat_AR = Object.values(context.categories)

    for (let p of Camp_AR) {
        categories[p.category_id] = (categories[p.category_id] || 0) + 1
    }
    
    return(
        
        <bs.Nav defaultActiveKey="/home" className="flex-column">
        <Link to="/" className="nav-link"><h5>All Campaigns ({Camp_AR.length})</h5></Link>
        <bs.Nav defaultActiveKey="/home" link="black" className="flex-column text-dark">
                {Object.entries(categories).map( ([key, value]) => (      
                    <Link style={{color: "black"}} key={key} to={`/category/${!Cat_AR[parseInt(key)] ? 0 : Cat_AR[parseInt(key)].id}`} className="nav-link">{!Cat_AR[parseInt(key)] ? "Other" : Cat_AR[parseInt(key)].title} ({value})</Link>
                    //console.log(!Cat_AR[parseInt(key)] ? "Other" : Cat_AR[parseInt(key)].title )
                    //console.log(value)
                    )                                            
                
                )}
        </bs.Nav>
        
        {/* {Object.entries(context.categories).map((category) => {
            return (
            <Link to={"/category/" + category[1].title} className="nav-link" key={category[1].title}>{category[1].title + ' (' + category[1].count +')'}</Link>
            )
        })}  */}
        </bs.Nav>
        
    )
}

export default Left;