import React from 'react'
import * as bs from 'react-bootstrap'


function About(props) {
    return(
        <bs.Container fluid className="p-4">
            <bs.Row noGutters>
                <bs.Col>
                    <h1>About</h1>
                </bs.Col>
            </bs.Row>
            <bs.Row noGutters>
                <bs.Col>
                    Example text.
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}

export default About;