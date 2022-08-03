import { dataconstants, deleteconstants } from "../actions/constants";
import { Action, InitialState } from "../Interfaces";


const initialState: InitialState = {
    data: {
        exhaustiveNbHits: false,
        exhaustiveTypo: false,
        hits: [],
        hitsPerPage: 0,
        nbHits: 0,
        nbPages: 1,
        page: 0,
        params: "",
        processingTimeMS: 0,
        query: ""
    },
    loading: false,
    error: null, hits: [],
    count: 0,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: InitialState = initialState, action: Action) => {

    switch (action.type) {
        case dataconstants.GET_ALL_DATA_REQUEST:
            state = {
                ...state, loading: true
            }

            break;
        case dataconstants.GET_ALL_DATA_SUCCESS:
            state = {
                ...state,
                data: action.payload.data,
                hits: [...state.hits.concat(action.payload.hits)],
                loading: false
            }

            break;
        case dataconstants.INCREASE_PAGE_COUNT:
            state = {
                ...state,
                count: state.count + 1,
            }

            break;
        case dataconstants.GET_ALL_DATA_FAILURE:
            state = {
                ...initialState,
                error: action.payload.error,
                loading: false
            }

            break;
        case deleteconstants.DELETE_ITEM_BY_ID_REQUEST:

            state = {
                ...state,
                error: null,
                loading: true
            }

            break;
        case deleteconstants.DELETE_ITEM_BY_ID_SUCCESS:

            state = {
                ...state,

                data: state.data.hits.filter((data: any) => data.objectID !== action.payload),
                error: null,
                loading: false
            }

            break;




        default:
            break;
    }
    return state
}