import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listings } from '../actions/categories' 


class Listings extends Component {

    componentDidMount(){
        listings(this.props.match.params.catId)
    }

    render() {
        console.log('labelonthis', this.props)
        return (
            <div>
                <h1>Results</h1>
                <ul>
                    {this.props.listings.map(a => {
                        return ( 
                        <li key={a.id}><img src={a.cover_photo}/>{a.listing_name}</li>
                        
                        )
                       
                    })}
                </ul>
            </div>
        )
    }

}

function MapStateToProps(appstate){
   
    return {
        listings: appstate.rlReducer.listings
    }

}

export default connect(MapStateToProps)(Listings)