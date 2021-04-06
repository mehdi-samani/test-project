import React, {useState} from 'react'

import Stage from './Stage'
const SelectTitle = (props)=>{
    const [selectOp , setSelectOp] = useState('')
    
    const onChangeSelectHandler = (e)=>{
        setSelectOp(e.target.value)
    }
console.log(selectOp,'selectOp')
 return (
        <>
        <select onChange={onChangeSelectHandler}>
        {props.apiGetData?.map(item =><option key={item.id} value ={item.id}>{ item.title} </option>)}
        </select>
  

<Stage apiGetData={props.apiGetData} selectOp={selectOp} />
        </>
    )
}

export default SelectTitle