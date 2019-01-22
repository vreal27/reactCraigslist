import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import store from '../store'

import Home from './Home'
import Listings from './Listings'
import AllListings from './AllListings'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/listings/:catId" component={Listings}/>
            <Route path="/listings/results/:catId" component={AllListings}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
