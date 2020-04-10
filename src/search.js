import React from 'react'
import axios from 'axios'
import AppContext from './context'


function Search(props) {
    
    const context = React.useContext(AppContext)

    const mySubmitHandler = (event) => {
        event.preventDefault();
        var search_in = event.target.search_in.value
        var search = event.target.search.value
        context.setSearchTerm(search)
        const result = axios({
            method: 'post',
            url: 'http://localhost:8000/api/search/',
            data: {
                'search': search,
                'search_in': search_in,
            }
        }).then(function (response) {
            let resp = response
            context.setSearchResults(resp.data)
            context.setSearch(true)
        })
    }

    console.log('searchRes', context.searchResults)

    return (
        <form onSubmit={mySubmitHandler} className="center">
            <div>
                <div className="wrap">
                    <div className="search">
                        <select id="search_in_select" name="search_in" type="button" className="searchDropdown dropdown-toggle" data-toggle="dropdown">
                            <option className="search-filter" value="everything">Everything</option>
                            <option className="search-filter" value="title">Title</option>
                            <option className="search-filter" value="user_first_name">Name</option>
                            <option className="search-filter" value="location_city">City</option>
                            {/* <option className="search-filter" value="location_country">Country</option> */}
                        </select >
                        <input className="searchTerm" name="search" placeholder="Try searching people, titles or locations" id="search-project" type="text"></input>
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Search;