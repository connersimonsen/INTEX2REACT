import React from 'react'
import * as bs from 'react-bootstrap'
import axios from 'axios'
// import { Formik, Form, Field} from 'formik'
import { useHistory } from 'react-router-dom'
import { formatNumber } from './util'
import AppContext from './context'





function CampaignPredictor(props) {
    
    const context = React.useContext(AppContext)
    const [amount, setAmount] = React.useState(-1);
    const [parsedAmount, setParsedAmount] = React.useState(-1);

    const predictSubmitHandler = (event) => {
        event.preventDefault();
        
        var goal = event.target.goal.value
        var is_charity = event.target.is_charity.value
        var has_beneficiary = event.target.has_beneficiary.value
        var visible_in_search = event.target.visible_in_search.value
        console.log(goal, is_charity, has_beneficiary, visible_in_search)
        
        const result = axios({
            method: 'post',
            url: 'http://localhost:8000/api/predict/',
            data: {
                'goal': goal,
                'is_charity': is_charity,
                'has_beneficiary': has_beneficiary,
                'visible_in_search': visible_in_search,
            }
        }).then(function (response) {
            let resp = response
            console.log('predictResp', resp.data)
            var parsedAmount = parseFloat(resp.data)
            if (parsedAmount <= 0 ) {
                setParsedAmount(0)
                setAmount(0.00)
            } else {
                var amount = formatNumber(parsedAmount)
                console.log('amt', amount)
                setAmount(amount)
                setParsedAmount(parsedAmount)
            }
        })
    }
    console.log('con amt', context.predictAmount)

    React.useEffect(() => {
        window.scrollTo(0, 0)
      }, [amount])
    
    return (
        <bs.Container fluid>
            <bs.Row>
                <bs.Col>
                    <h1 className="mt-3" style={{textAlign: 'center'}}>Campaign Success Predictor</h1>
                </bs.Col>
            </bs.Row>
            {parsedAmount >= 0 &&
            <bs.Row>
                <bs.Col>
                    <h3 className="mt-3" style={{textAlign: 'center'}}>Your campaign is predicted to make: <h2>${amount}</h2></h3>
                </bs.Col>
            </bs.Row>
            }
            <bs.Row className="my-3">
                <bs.Col md="12">
                    <bs.Card className="shadow">
                        <bs.Card.Header style={{ background: '#232F3E' }}>
                            <bs.Card.Title style={{ color: 'white' }}>Campaign Information</bs.Card.Title>
                        </bs.Card.Header>
                        <bs.Card.Body>


                            <bs.Form onSubmit={predictSubmitHandler}>
                                <bs.Form.Group controlId="exampleForm.ControlInput1">
                                    <bs.Form.Label>Title</bs.Form.Label>
                                    <bs.Form.Control name="title" type="text" placeholder="Campaign Title" />
                                </bs.Form.Group>
                                <bs.Form.Group controlId="exampleForm.ControlInput1">
                                    <bs.Form.Label>Goal</bs.Form.Label>
                                    <bs.Form.Control name="goal" type="number" placeholder="Campaign Goal" min='0' />
                                </bs.Form.Group>
                                <bs.Form.Group controlId="exampleForm.ControlTextarea1">
                                    <bs.Form.Label>Description</bs.Form.Label>
                                    <bs.Form.Control name="description" as="textarea" rows="3" placeholder="Campaign Description" />
                                </bs.Form.Group>
                                <bs.Form.Group controlId="exampleForm.ControlSelect1">
                                <bs.Form.Label>Category</bs.Form.Label>
                                    <bs.Form.Control name="category_id" as="select">
                                        <option value="1">Other</option>
                                        <option value="2">Accidents & Emergencies</option>
                                        <option value="3">Animals & Pets</option>
                                        <option value="4">Babies, Kids, & Family</option>
                                        <option value="5">Business & Entrepreneurs</option>
                                        <option value="6">Celebrations & Events</option>
                                        <option value="7">Community & Neighbors</option>
                                        <option value="8">Creative Arts, Music, & Film</option>
                                        <option value="9">Funerals & Memorials</option>
                                        <option value="10">Travel & Adventure</option>
                                        <option value="11">Medical, Illness, & Healing</option>
                                        <option value="12">Missions, Faith, Church</option>
                                        <option value="13">Nonprofits & Charities</option>
                                        <option value="14">Weddings & Honeymoons</option>
                                    </bs.Form.Control>
                                </bs.Form.Group>
                                <bs.Form.Group controlId="exampleForm.ControlSelect1">
                                <bs.Form.Label>Charity?</bs.Form.Label>
                                    <bs.Form.Control name="is_charity" as="select">
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </bs.Form.Control>
                                </bs.Form.Group>
                                <bs.Form.Group controlId="exampleForm.ControlSelect1">
                                <bs.Form.Label>Beneficiary?</bs.Form.Label>
                                    <bs.Form.Control name="has_beneficiary" as="select">
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </bs.Form.Control>
                                </bs.Form.Group>
                                <bs.Form.Group controlId="exampleForm.ControlSelect1">
                                <bs.Form.Label>Publicly Visible?</bs.Form.Label>
                                    <bs.Form.Control name="visible_in_search" as="select">
                                        <option value="0">No</option>
                                        <option value="1">Yes</option>
                                    </bs.Form.Control>
                                </bs.Form.Group>
                                <div className="text-center">
                            <bs.Button
                                variant="success"
                                type="submit"
                                className="d-inline-flex align-items-center"
                            >
                                Predict
                         </bs.Button>
                        </div>
                            </bs.Form>
                        </bs.Card.Body>
                    </bs.Card>
                </bs.Col>
            </bs.Row>
        </bs.Container>
    )
}
export default CampaignPredictor