import React from 'react'
import * as bs from 'react-bootstrap'

function WebsiteCard(props) {
    return(     
        <bs.Col>   
            <a href={props.url} style={{textDecoration: 'inherit', color: 'inherit'}}>
                <bs.Card key={props.id} className="my-3 shadow center hvr-grow" style={{minWidth: "100%"}}>                
                    <bs.Card.Img className="websiteImg" src={`${process.env.PUBLIC_URL}/Media/${props.filename}.png`}/>
                    {/* <bs.Card.Body>            
                        <bs.Card.Title className="text-center">{props.name}</bs.Card.Title>                        
                    </bs.Card.Body> */}
                </bs.Card>  
            </a>     
        </bs.Col> 
    )                
}

export default WebsiteCard;