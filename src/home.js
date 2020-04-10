import React from 'react'
import * as bs from 'react-bootstrap'
import { useRouteMatch } from 'react-router-dom'
import CampaignCard from './campaign-card'
import Search from './search'
import AppContext from './context'
import { Link } from 'react-router-dom'


function Home(props) {

    const context = React.useContext(AppContext)
    let Camp_Ar = Object.values(context.campaigns)
    const match = useRouteMatch('/category_id/:Name')
    let categoryName = ''
    if (match) {
        categoryName = match.params.Name
    }

    if (match) {
        Camp_Ar = Camp_Ar.filter(p => p.category_id === match.params.Name)
    }

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <bs.Container fluid className="p-4">
            <bs.Row>
                <bs.Col>
                    
                </bs.Col>
            </bs.Row>
            <bs.Row>
                <bs.Col>
                    <bs.Card className="shadow">
                        <bs.Card.Body>
                        <h1 style={{ textAlign: "center" }}>Welcome to GoFundWe!</h1>
                            <h5 style={{ textAlign: 'center' }}>Are you looking to create a GoFundMe campaign? Click the button below to see how your campaign will do!</h5>
                            <div className="text-center mb-2 mt-4">
                                <Link to="/predictor" className="btn btn-success hvr-grow">Campaign Success Predictor</Link>
                            </div>
                            
                        </bs.Card.Body>
                    </bs.Card>
                </bs.Col>
            </bs.Row>
            <bs.Row className="mt-5">
            <Search />
            </bs.Row>
            <bs.Row>
                <bs.Col>
                    {context.search ?
                        <h4>{context.searchCount} results for "{context.searchTerm}":</h4>
                        :
                        <div>
                            {categoryName ?
                                <h4>{categoryName}</h4>
                                :
                                <h4>Find a GoFundMe</h4>
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