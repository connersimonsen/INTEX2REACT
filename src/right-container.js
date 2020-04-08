import React from 'react'
import corona from './corona'
import * as bs from 'react-bootstrap'
import WebsiteCard from './website-card'
//import { bsClass } from 'react-bootstrap/lib/utils/bootstrapUtils'
// import * as bs from 'react-bootstrap'
// import { Link } from 'react-router-dom'


function Right(props) {

    const Cor_AR = Object.values(corona)
    return(
        <bs.Container>
            <bs.Col>
                {/* <center style={{color: "#02075d"}}><h3>Extra Resources</h3></center> */}
                <br></br>
                <bs.Row className="">
                    {Cor_AR.map(p => {
                        return (
                            <bs.Row>
                                <WebsiteCard key={p.id} name={p.name} id={p.id} filename={p.filename} url={p.url}/>
                            </bs.Row>
                        )
                    })}
                </bs.Row>
            </bs.Col>
        </bs.Container>
        
    )
}

export default Right;