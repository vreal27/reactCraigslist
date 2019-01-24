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
  axios.get(`/listings/${catId}`).then(resp => {
    console.log("action", resp)
    store.dispatch({
      type:'CAT_LISTINGS',
      listings: resp.data
    })
  })
}

export function createPost(post) {
 return  axios.post('/listings', post)
}

export function singlePost(catId){
  axios.get(`/listing/${catId}`).then(resp => {
    store.dispatch({
      type:'SINGLE_POST',
      post: resp.data
    })
  })
}


export function allListings(id){
  axios.get(`/all/results/${id}`).then(resp => {
    console.log("results", resp)
    store.dispatch({
      type: 'ALL_LISTINGS',
      allListings: resp.data
    })
  })
}

