import { dataconstants, deleteconstants } from "../actions/constants";
import { Action, InitialState } from "../Interfaces";


const initialState:InitialState= {
    data :[],
    loading:false,
    error:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state:InitialState=initialState , action:Action )=>{

    switch (action.type) {
        case dataconstants.GET_ALL_DATA_REQUEST:
            state = {
                ...state,loading:true
            }
            
            break;
        case dataconstants.GET_ALL_DATA_SUCCESS:
            state = {
                ...state,
                data:action.payload.data,
                loading:false
            }
            
            break;
        case dataconstants.GET_ALL_DATA_FAILURE:
            state = {
                ...initialState,
             error:action.payload.error,
                loading:false
            }
            
            break;
        case deleteconstants.DELETE_ITEM_BY_ID_REQUEST:
           
            state = {
               ...state,
             error:null,
                loading:true
            }
            
            break;
        case deleteconstants.DELETE_ITEM_BY_ID_SUCCESS:
           
            state = {
               ...state,
               data:state.data.filter((data:any)=>data.objectID!== action.payload),
             error:null,
                loading:false
            }
            
            break;
      


    
        default:
            break;
    }
    return state
}