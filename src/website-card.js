import React from 'react'
import * as bs from 'react-bootstrap'

function WebsiteCard(props) {
    return(     
        <bs.Col>   
            <a href={props.url}>
                <bs.Card key={props.id} className="my-3 shadow center hvr-grow" style={{minWidth: "100%"}}>                
                    <bs.Card.Img variant="top" className="websiteImg" src={`/Media/${props.filename}.png`}/>
                    <bs.Card.Body>            
                        <bs.Card.Title className="text-center">{props.name}</bs.Card.Title>                        
                    </bs.Card.Body>
                </bs.Card>  
            </a>     
        </bs.Col> 
    )                
}

export default WebsiteCard;