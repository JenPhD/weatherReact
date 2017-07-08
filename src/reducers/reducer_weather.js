import { FETCH_WEATHER } from '../actions/index';
export default function(state = [], action) {
  //console.log('Action received', action);
  switch(action.type) {
    case FETCH_WEATHER:
      //redux returns an entirely new piece of state
      //does not mutate state
      //concatenating new search with previous searches
      //return state.concat([ action.payload.data ]);
      //ES6 way to concat
      //this adds new data to the front of the array
      //can swap to add to the end
      return [ action.payload.data, ...state ];
  }

  return state;
}
