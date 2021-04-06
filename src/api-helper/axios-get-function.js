import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { BaseUrl } from './base-url'
 const ApiTest = ()=>{
    let [apiGetData,setApiGetData] = useState()
    axios.get(BaseUrl).then(response => {
        const data = response.data
        console.log(data,'dara')
        setApiGetData(data)
    })
}
export default ApiTest;