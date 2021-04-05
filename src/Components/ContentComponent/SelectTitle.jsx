import React, {useState} from 'react'
import {BaseUrl} from '../../api-helper/base-url'
import axios from 'axios'
import Stage from './Stage'
const SelectTitle = (props)=>{
    let [selectOp , setSelectOp] = useState('')
    let [apiGetData,setApiGetData] = useState()

    const apiTest = ()=>{
        axios.get(BaseUrl).then(response => {
            const data = response.data
            console.log(data,'dara')
            setApiGetData(data)
        })
    }

console.log(apiGetData,'apiGetData')
React.useEffect(()=>{
    apiTest()
},[])
    const onChangeSelectHandler = (e)=>{
        setSelectOp(e.target.value)
    }
console.log(selectOp,'selectOp')
 return (
        <>
        <select onChange={onChangeSelectHandler}>
        {apiGetData?.map(item =><option value ={item.id}>{ item.title} </option>)}
        </select>
  

<Stage apiGetData={apiGetData} selectOp={selectOp} />
        </>
    )
}

export default SelectTitle