import React from 'react'
import * as bs from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'
import CampaignCard from './campaign-card'
import AppContext from './context'


function Home(props) {
    
    const context = React.useContext(AppContext)
    let Camp_Ar = Object.values(context.campaigns)
    const match = useRouteMatch('/category_id/:Name')

    if(match) {
        Camp_Ar = Camp_Ar.filter(p => p.category_id === match.params.Name)
    }

    console.log(!Camp_Ar[0] ? "Nope" : Camp_Ar[0])
    
    return(
        <bs.Container fluid className="p-4">
            <bs.Row>
                <bs.Col>
                    <h1 style={{ textAlign: "center" }}>Welcome to GoFundWe!</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row className="mt-4">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Try searching people, titles or locations"></input>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
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
                
                {Camp_Ar.map(p => {
                    return (
                        <CampaignCard campaign={p} id={p.campaign_id} key={p.campaign_id} />
                    )
                })}                
            </bs.Row>
        </bs.Container>
    )
}

export default Home;