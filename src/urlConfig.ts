export const api:string = "https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0"
export const apiFunc = (pageNo:number)=>{
    return `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageNo}`
}