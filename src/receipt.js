import React from 'react'
import * as bs from 'react-bootstrap'


function Receipt(props) {
    return (
        <bs.Container fluid>
            <bs.Row>
                <bs.Col>
                    <h1 className="mt-3" style={{textAlign: "center"}}>
                        Thanks
                    </h1>

                    <p style={{textAlign: "center"}}>Thank you for your order!</p>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}
export default Receipt
