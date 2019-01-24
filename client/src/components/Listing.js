import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singlePost } from '../actions/categories';

class Listing extends Component {
    componentDidMount(){
        singlePost(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.post.map(s => {
                        return(
                            <li key={s.id}><img src={s.cover_photo}/>{s.listing_name}</li>
                        )
                    })}
                </ul>
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