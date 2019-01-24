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
        <div id="leftbar">
          <h3>Ryan's List</h3>
          <ul className="linklist">
            <li><Link to="/">help,faq,abuse,legal</Link></li>
            <li><Link to="/">avoid scams & fraud</Link></li>
            <li><Link to="/">personal safety tips</Link></li>
            <li><Link to="/">terms of use</Link></li>
            <li><Link to="/">privacy policy</Link></li>
            <li><Link to="/">system status</Link></li>
          </ul>
          <ul className="linklist">
            <li><Link to="/">about ryanslist</Link></li>
            <li><Link to="/">ryanslist is hiring in LV</Link></li>
            <li><Link to="/">ryanslist open source</Link></li>
            <li><Link to="/">ryanslist blog</Link></li>
            <li><Link to="/">best-of-ryanslist</Link></li>
            <li><Link to="/">ryanslist TV</Link></li>
            <li><Link to="/">"ryanslist joe"</Link></li>
            <li><Link to="/">ryan connects</Link></li>
          </ul>
        </div>
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
         <div id="rightbar">
         <h2>Nearby LV</h2>
         <ul className="linklist">
            <li><Link to="/">bakersfield</Link></li>
            <li><Link to="/">elko</Link></li>
            <li><Link to="/">flagstaff</Link></li>
            <li><Link to="/">gold country</Link></li>
            <li><Link to="/">hanford</Link></li>
            <li><Link to="/">imperial co</Link></li>
            <li><Link to="/">inland empire</Link></li>
            <li><Link to="/">los angeles</Link></li>
         </ul>
         
         </div>
        
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