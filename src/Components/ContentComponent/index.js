import React,{useState} from 'react'
import {BaseUrl} from '../../api-helper/base-url'
import axios from 'axios'
import SelectTitle from './SelectTitle'
const DataJob = () => {
    const [apiGetData,setApiGetData] = useState()

    const apiTest = ()=>{
        axios.get(BaseUrl).then(response => {
            const data = response.data
            setApiGetData(data)
        })
    }
React.useEffect(()=>{
    apiTest()
},[])
    return(
        <div className="content-main"> 
        <SelectTitle apiGetData={apiGetData} />
        </div>
    )
}

export default DataJob