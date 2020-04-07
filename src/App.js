import React from 'react';
import * as bs from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HeaderContainer from './header-container'
import LeftContainer from './left-container'
import RightContainer from './right-container'
import FooterContainer from './footer-container'
import Home from './home'
import About from './about'
import Help from './help'
import ProductDetail from './product-detail'
import ShoppingCart from './shopping-cart'
import Checkout from './checkout-starter'
import Receipt from './receipt'
import './App.css'

// Gui has been here

function App(props) {
  return (

    <Router>
        <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column" style={{ backgroundColor: "#EAEDED"}}>
            <bs.Row className="flext-grow-0 flex-shrink-0 shadow-sm">
              <bs.Col className="px-3 py-2" style={{ backgroundColor: "#232F3E"}}>
                <HeaderContainer />
              </bs.Col>
            </bs.Row>
          <bs.Row noGutters className="flex-grow-1">
            <bs.Col md="2" className="px-3 py-4 shadow" style={{ backgroundColor: "#EAEDED"}}>
              <LeftContainer />
            </bs.Col>
            <bs.Col md="8">
              <Switch>
                <Route exact path="/product/:Id" component={ProductDetail}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:Name" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/help" component={Help}/>
                <Route exact path="/cart" component={ShoppingCart}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="/receipt" component={Receipt}/>
              </Switch>
            </bs.Col>
            <bs.Col md="2" className="px-3 py-4 shadow" style={{ backgroundColor: "#EAEDED"}}>
              <RightContainer />
            </bs.Col>
          </bs.Row>
          <bs.Row noGutters className="flex-grow-0 flex-shrink-0">
            <bs.Col className="px-3 py-2" style={{ backgroundColor: "#232F3E"}}>
              <FooterContainer />
            </bs.Col>
          </ bs.Row>
        </bs.Container>
    </Router>
   
  );
}


export default App;
