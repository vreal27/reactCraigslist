import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { singlePost } from '../actions/categories';
import '../styles/Listing.css'

class Listing extends Component {
    componentDidMount(){
        singlePost(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <Link to='/'>Back to home</Link>
                <div className="postBox">
                    <ul id="single">
                        {this.props.post.map(s => {
                            return(
                                <li key={s.id}><img src={s.cover_photo}/><br/>{s.listing_name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}


function MapStateToProps(appState){
    return {
        post: appState.rlReducer.post
    }
}

export default connect(MapStateToProps)(Listing)