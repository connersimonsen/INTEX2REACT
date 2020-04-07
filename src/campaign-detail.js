import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
//import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import { formatNumber } from './util'


function CampaignDetail(props) {

    const context = React.useContext(AppContext)
    const [imgIdx, setImgIdx] = React.useState(1);
    
    const match = useRouteMatch("/campaign/:slug")
    let campaign = context.campaigns[match.params.slug]    
    if (campaign == null) {
        return (
            <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <bs.Col>
                    <h1 className="text-center">Campaign Not Found</h1>
                </bs.Col>
            </bs.Row>
        </bs.Container>
        )
    } else {
        return(
            <bs.Container fluid className="p-4">
                <bs.Row>
                    <bs.Col md="8">
                        <h1 style={{display: 'inline'}}>{campaign.title}</h1>
                        <a href={campaign.url}>
                            <bs.Button type="button" variant="warning" className='float-right mt-2'>Go Fund Me Link</bs.Button>
                        </a>
                        <h5><span style={{fontSize: '28px'}}>${formatNumber(campaign.current_amount)}</span> raised of ${formatNumber(campaign.goal)} goal</h5>
                        <p>{campaign.description}</p>
                    </bs.Col>
                    <bs.Col md="4">
                        <bs.Row>
                            <bs.Col md="12">
                            <bs.Image src={campaign.campaign_image_url} className="detailImg float-right" rounded></bs.Image>
                            </bs.Col>
                        </bs.Row>
                    </bs.Col>
                </bs.Row>
                <bs.Row>
                    
                </bs.Row>
                
            </bs.Container>
        )   
    }
                 
}

export default CampaignDetail;