import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux'
import { allListings } from '../actions/categories'

class Listings extends Component {
    componentDidMount(){
        allListings(this.props.match.params.catId)
    }

    render() {
        return (
            <div>
                <ul>
                </ul>
            </div>
        )
    }

}


function MapStateToProps(appState){
    return {
        allListings: appState.rlReducer.allListings
    }
}

export default connect(MapStateToProps)(Listings)