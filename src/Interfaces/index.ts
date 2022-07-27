

export interface InitialState{
    data:any
    loading:boolean,
    error:null,
}
export type Action = {
    type:string,
    payload:{
    data:[],
    error:null
}
}

export interface DeleteAction {
    type:string,
    payload :number
}