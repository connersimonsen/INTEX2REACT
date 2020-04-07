import React from 'react'
import * as bs from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'
import CampaignCard from './campaign-card'
import AppContext from './context'


function Home(props) {
    
    const context = React.useContext(AppContext)
    
    return(
        <bs.Container fluid className="p-4">
            <bs.Row>
                <bs.Col>
                    <h1 style={{ textAlign: "center" }}>Welcome to GoFundWe!</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row className="mt-4">
                <div class="wrap">
                    <div class="search">
                        <input type="text" class="searchTerm" placeholder="Try searching people, titles or locations"></input>
                        <button type="submit" class="searchButton">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </bs.Row>
            <bs.Row>
                <bs.Col>
                    <h4>Find a GoFundMe for you</h4>
                </bs.Col>
            </bs.Row>
            <bs.Row>
                
                {Object.entries(context.campaigns).map(([id, campaign]) => {
                    {console.log('campaign', id, campaign)}
                    return (
                        <CampaignCard campaign={campaign} id={id} key={id} />
                    )
                })}                
            </bs.Row>
        </bs.Container>
    )
}

export default Home;