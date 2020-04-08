import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatNumber } from './util'


function campaignCard(props) {
    return(
        <bs.Col md="3">
            <Link to={"/campaign/" + props.id} style={{ textDecoration: 'inherit', color: 'inherit' }}>
                <bs.Card key={props.id} className="my-3 shadow hvr-grow" style={{ minHeight: "450px" }}>
                    <bs.Card.Img variant="top" className="cardImg" src={props.campaign.campaign_image_url} />
                    <bs.Card.Body>
                        <bs.Card.Title className="text-center">{props.campaign.title}</bs.Card.Title>
                        <bs.Card.Text className="text-center">
                            <b>Amount Raised:</b> ${formatNumber(props.campaign.current_amount)}
                            <br></br>
                            <b>Goal:</b> ${formatNumber(props.campaign.goal)}
                        </bs.Card.Text>
                    </bs.Card.Body>
                </bs.Card>
            </Link>
        </bs.Col>
    )                
}

export default campaignCard;