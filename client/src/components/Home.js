import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import { connect } from 'react-redux'
import { headCategories } from '../actions/categories'
import '../styles/Home.css'

class Home extends Component {
  componentDidMount() {
    headCategories()
  }
  
  render() {


    return (
      <div className="main">
        <div id="leftbar">TEST</div>
        <div className ="catContainer">
            <h1>Home</h1>
            <div className="info">
              {this.props.categories.map(c => (
                <div key={c.id} className="catBox">
                  <h2><Link to={`/all/results/${c.id}`}>{c.name}</Link></h2>
                  {c.subcat.map(r => (<div key= {r.id} className="subcats"><Link to={`/listings/${r.id}`}>{r.name}</Link></div>))}
              </div>
              ))}
              </div>
         </div>
         <div id="rightbar">TEST</div>
        
      </div>
    )
  }
}

function mapStateToProps(appState) {
  return {
    categories: appState.rlReducer.categories
  }
}

export default connect(mapStateToProps)(Home)