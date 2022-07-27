import axios from "axios"
import { Dispatch } from "react"
import { Action, DeleteAction } from "../Interfaces"
import { api } from "../urlConfig"
import { dataconstants, deleteconstants } from "./constants"

export const getAllData = () =>{
    return async (dispatch: Dispatch<Action>) =>{
        dispatch({
            type: dataconstants.GET_ALL_DATA_REQUEST,
            payload: {
                data: [],
                error: null
            }
        })

        const res = await axios.get(api)
        if(res.status === 200){
            dispatch({type:dataconstants.GET_ALL_DATA_SUCCESS,
            payload:{data:res.data.hits,error:null}})
        }
        else{
            dispatch({type:dataconstants.GET_ALL_DATA_FAILURE,
                payload:{data:[],error:res.data.error}})
        }
    }
}


export const deleteById = (id:number) =>{
    return async (dispatch :Dispatch<DeleteAction>)=>{
        dispatch ({
            type:deleteconstants.DELETE_ITEM_BY_ID_SUCCESS ,
            payload : id
        })
        // dispatch ({
        //     type:deleteconstants.DELETE_ITEM_BY_ID_SUCCESS ,
        //     payload : id
        // })
    }
}