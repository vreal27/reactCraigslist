import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { listings } from '../actions/categories' 
import '../styles/Listings.css'


class Listings extends Component {

    componentDidMount(){
        listings(this.props.match.params.id)
    }

    render() {
        console.log('labelonthis', this.props)
        return (
            <div className= "listingsContainer">
                <div className="listbox">
                    <Link to='/'>Back to home</Link>
                    <h1>Listings</h1>
                    <ul className= "listings">
                        {this.props.listings.map((a,i) => {
                            return ( 
                            <li key={'id' + i}><img src={a.cover_photo}/><br/><Link to={`/listing/${a.id}`}>{a.listing_name}</Link></li>
                            
                            )
                        
                        })}
                    </ul>
                    <Link id="create" to={"/create/" + this.props.match.params.id}>Create a Post</Link> 
                </div>
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