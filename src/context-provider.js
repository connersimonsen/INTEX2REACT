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
            setSearchResults: this.setSearchResults,
            setSearch: this.setSearch,
            setSearchTerm: this.setSearchTerm,
        }

        this.state = {
            campaigns: {},
            categories: {},
            searchResults: {},
            search: false,
            searchCount: 0,
            searchTerm: '',
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
        const resp = await axios.get('http://localhost:8000/api/category_id/')
        const campResp = await axios.get('http://localhost:8000/api/campaign/')

        const camps = {}
        for(const p of campResp.data) {
            camps[p.campaign_id] = p
        }

        const cats = {} 
        for (const c of resp.data) {
            cats[c.id] = c
        }

        this.setState({
            campaigns: camps,
            categories: cats,
        })
    }

    setSearchResults = (campaigns) => {
        this.setState(state => produce(state, draft => {
            let count = 0
            const camps = {}
            for(const camp of campaigns) {
                camps[camp.campaign_id] = camp
                count += 1
            }
            draft.searchResults = camps
            draft.searchCount = count
        }))
    }

    setSearch = (searchBool) => {
        this.setState(state => produce(state, draft => {
            draft.search = searchBool
        }))
    }

    setSearchTerm = (term) => {
        this.setState(state => produce(state, draft => {
            draft.searchTerm = term
        }))
    }
}
