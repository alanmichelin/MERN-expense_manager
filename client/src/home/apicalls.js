import Axios from 'axios'
export const getAllOperations = async () => {
    let result = Axios.get('http://localhost:3001/api/alloperations').then((res)=>{
             return res.data
        })
    return result
    }
export const getBalance = async () =>{ 
    var result = await Axios.get('http://localhost:3001/api/amounts').then((res)=>{
    return res.data
})
    return result
}