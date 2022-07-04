export const wxApi = function(fn:Function,options:any) {
    return new Promise((resolve,reject)=>{
        return fn({
            ...options,
            success:(res:any)=> {
                resolve(res)
            },
            fail:(res:any)=> {
                reject(res)
            }
        }) 
    })
}