import axios from "axios"
import { Dispatch } from "react"
import { Action, DeleteAction, NewAction } from "../Interfaces"
import { apiFunc } from "../urlConfig"
import { dataconstants, deleteconstants } from "./constants"

export const getAllData = (pageNo: number) => {
    console.log({ pageNo })
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: dataconstants.GET_ALL_DATA_REQUEST,
            payload: {
                hits: [],
                data: {
                    exhaustiveNbHits: false,
                    exhaustiveTypo: false,
                    hits: [],
                    hitsPerPage: 0,
                    nbHits: 0,
                    nbPages: 0,
                    page: 0,
                    params: "",
                    processingTimeMS: 0,
                    query: ""
                },
                error: null
            }
        })

        const res = await axios.get(apiFunc(pageNo))
        console.log(res)
        if (res.status === 200) {
            dispatch({
                type: dataconstants.GET_ALL_DATA_SUCCESS,
                payload: { hits: res.data.hits, data: res.data, error: null }
            })
        }
        else {
            dispatch({
                type: dataconstants.GET_ALL_DATA_FAILURE,
                payload: {
                    hits: [],
                    data: {
                        exhaustiveNbHits: false,
                        exhaustiveTypo: false,
                        hits: [],
                        hitsPerPage: 0,
                        nbHits: 0,
                        nbPages: 0,
                        page: 0,
                        params: "",
                        processingTimeMS: 0,
                        query: ""

                    }, error: res.data.error
                }
            })
        }
    }
}

export const increase_data = () => {
    return async (dispatch: Dispatch<NewAction>) => {
        dispatch({
            type: dataconstants.INCREASE_PAGE_COUNT,

        })
    }
}

export const deleteById = (id: number) => {
    return async (dispatch: Dispatch<DeleteAction>) => {
        dispatch({
            type: deleteconstants.DELETE_ITEM_BY_ID_SUCCESS,
            payload: id
        })
        // dispatch ({
        //     type:deleteconstants.DELETE_ITEM_BY_ID_SUCCESS ,
        //     payload : id
        // })
    }
}