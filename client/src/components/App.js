import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import Listings from './Listings'
import AllListings from './AllListings'
import Listing from './Listing'
import Create from './Create'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/listing/:id" component={Listing}/>
            <Route path="/listings/:id" component={Listings}/>
            <Route path="/create/:id" component={Create}/>
            <Route path="/all/results/:id" component={AllListings}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
