import { FETCH_PROPERTY } from '../actions/action_fetch';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_PROPERTY:
        //console.log(action.payload.data.search_results)
        return [action.payload.data.search_results, ...state]
       
    }
    return state;
}