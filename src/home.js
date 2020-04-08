import React from 'react'
import * as bs from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'
import CampaignCard from './campaign-card'
import Search from './search'
import AppContext from './context'


function Home(props) {
    
    const context = React.useContext(AppContext)
    let Camp_Ar = Object.values(context.campaigns)
    const match = useRouteMatch('/category_id/:Name')
    let categoryName = ''
    if (match) {
        categoryName = match.params.Name
    }

    if(match) {
        Camp_Ar = Camp_Ar.filter(p => p.category_id === match.params.Name)
    }
    
    return(
        <bs.Container fluid className="p-4">
            <bs.Row>
                <bs.Col>
                    <h1 style={{ textAlign: "center" }}>Welcome to GoFundWe!</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row className="mt-4">
                <Search />
            </bs.Row>
            <bs.Row>
                <bs.Col>
                    {context.search ?
                        <h4>"{context.searchTerm}" returned {context.searchCount} results:</h4>
                        :
                        <div>
                            {categoryName ?
                                <h4>{categoryName}</h4>
                                :
                                <h4>Find a GoFundMe for you</h4>
                            }
                            
                        </div>
                    }
                    
                </bs.Col>
            </bs.Row>
            {context.search ?
                <bs.Row>
                    {Object.values(context.searchResults).map(p => {
                        return (
                            <CampaignCard campaign={p} id={p.campaign_id} key={p.campaign_id} />
                        )
                    })}
                </bs.Row>
                :
                <bs.Row>
                    {Camp_Ar.map(p => {
                        return (
                            <CampaignCard campaign={p} id={p.campaign_id} key={p.campaign_id} />
                        )
                    })}
                </bs.Row>
            }
        </bs.Container>
    )
}

export default Home;