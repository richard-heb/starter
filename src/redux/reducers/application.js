import * as actions from '../actions/application';

const initialState = {
  loading: true
}

const application = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_STATE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default application;