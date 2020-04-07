import React from 'react'
import axios from 'axios'
import AppContext from './context'
import App from './App'
import produce from 'immer'

/** The context provider for our app */
export default class AppProvider extends React.Component {

    constructor(props) {
        super(props)
        
        this.actions = {
            
        }

        this.state = {
            campaigns: {},
            
        }
    }

    render() {
        return (
            <AppContext.Provider value={{...this.state, ...this.actions}}>
                <App />
            </AppContext.Provider>
        )
    }

    async componentDidMount() {
        const campResp = await axios.get('http://localhost:8000/api/campaign')

        const camps = {}
        for(const p of campResp.data) {
            camps[p.campaign_id] = p
        }

        this.setState({
            campaigns: camps,
        })
        
        console.log(campaigns)
    }

}
