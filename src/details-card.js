import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { formatNumber } from './util'


function DetailCard(props) {
    return(        
        <bs.Card key={props.id} className="my-3 shadow" style={{minHeight: "10rem"}}>                
            <bs.Card.Img variant="top" className="cardImg" src={props.campaign.campaign_image_url} />
            <bs.Card.Body>            
                <bs.Card.Title className="text-center">Name: {props.campaign.user_first_name}</bs.Card.Title>
                <bs.Card.Text className="text-center">
                    <b>Date launched:</b> {props.campaign.launch_date}
                    <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"/>
                    <br></br>
                    <b>Number of hearts:</b> {props.campaign.campaign_hearts} <i style={{fontSize: '15px'}} className="em em-hearts"></i>
                    <br></br>                 
                    <bs.Button type="button" variant="warning" href={props.campaign.url} className='center mt-2'>Go Fund Me Link</bs.Button>
                </bs.Card.Text>
                
            </bs.Card.Body>
        </bs.Card>        
    )                
}

export default DetailCard;