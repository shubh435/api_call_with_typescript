export interface InitialState {
    data: {


        exhaustiveNbHits: boolean;
        exhaustiveTypo: boolean;
        hits: any;
        hitsPerPage: number;
        nbHits: number;
        nbPages: number;
        page: number;
        params: string;
        processingTimeMS: number;
        query: string;
    };
    loading: boolean;
    error: null;
    hits: any,
    count: number
}
export type Action = {
    type: string;
    payload: {
        hits: any,
        data: {
            exhaustiveNbHits: boolean;
            exhaustiveTypo: boolean;
            hits: any;
            hitsPerPage: number;
            nbHits: number;
            nbPages: number;
            page: number;
            params: string;
            processingTimeMS: number;
            query: string;
        };
        error: null;
    };
};

export interface DeleteAction {
    type: string;
    payload: number;
}
export interface NewAction {
    type: string;

}
