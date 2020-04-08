import React from 'react'
import * as bs from 'react-bootstrap'
import AppContext from './context'
//import { Link } from 'react-router-dom'
import { useRouteMatch, Link } from 'react-router-dom'
import { formatNumber } from './util'
import DetailCard from './details-card'


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
        let amt = (campaign.current_amount/campaign.goal)
        let fcolor = ""
        if (amt < .3) {fcolor = "red"}
        else if (amt > .3 && amt < .9) {fcolor = "#d2ee11"}
        else if (amt > .9) {fcolor = "green"}

        return(
            <bs.Container fluid className="p-4">
                <bs.Row>
                    <bs.Col md="7">
                        <h1 style={{display: 'inline', color: "#02075d"}}>{campaign.title}</h1>                        
                        <h5><span style={{fontSize: '28px', color: fcolor}}>${formatNumber(campaign.current_amount)}</span> raised of ${formatNumber(campaign.goal)} goal</h5>
                        <h5>{campaign.is_charity === "TRUE" ? "Charity Name: " + campaign.charity_name : "The creator is an individual"}</h5>
                        <br></br>
                        <p style={{fontSize: '22px'}}>{campaign.description}</p>
                    </bs.Col>
                    <bs.Col md="5">
                        <bs.Row>
                            <bs.Col md="12">                                
                                <DetailCard campaign={campaign} id={campaign.campaign_id} key={campaign.campaign_id}/>                                
                            </bs.Col>
                        </bs.Row>
                    </bs.Col>
                </bs.Row> 
            </bs.Container>
        )   

        
    }
                 
}

export default CampaignDetail;