import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function headCategories() {
  axios.get('/categories').then(resp => {
    store.dispatch({
      type: 'HEAD_CATEGORIES', 
      categories: resp.data.categories
    })
  })
}


export function listings(catId) {
  axios.get(`/listings/?catId=${catId}`).then(resp => {
    console.log("action", resp)
    store.dispatch({
      type:'CAT_LISTINGS',
      listings: resp.data
    })
  })
}

export function allListings(catId){
  axios.get(`/listings/results/?catId=${catId}`).then(resp => {
    console.log("results", resp)
    store.dispatch({
      type: 'ALL_LISTINGS',
      allListings: resp.data
    })
  })
}