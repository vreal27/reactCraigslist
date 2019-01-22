const initialState = {
  categories:[],
  listings: [],
  allListings: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'HEAD_CATEGORIES':
      return {...state, categories: action.categories}
    case 'CAT_LISTINGS':
      return {...state, listings: action.listings}
    case 'ALL_LISTINGS':
      return {...state, allListings: action.allListings}
    default:
      return state
  }
}