import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux'
import { allListings } from '../actions/categories'
import '../styles/AllListings.css'

class Listings extends Component {
    componentDidMount(){
        allListings(this.props.match.params.id)
    }

    render() {
        return (
            <div className="AllListingsContainer">
                <div className="listbox">
                <Link to='/'>Back to home</Link>
                    <h1>All listings</h1>
                    <ul className="AllListings">
                        {this.props.allListings.map(r => {
                            return(<li key={r.id}><Link to={`/listing/${r.id}`}><img src={r.cover_photo}/><br/>{r.listing_name}</Link></li>
                        )})}
                    </ul>
                </div>
            `   
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