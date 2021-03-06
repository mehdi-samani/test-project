import React from 'react'

const Stage = (props)=>{
    return (
     
        <div className="stage-main">
             
             {props?.apiGetData?.map(item=>item.id == props.selectOp ? 
            <div key={item.id} className="child-p">
                 {item.stages.map((item, index) => <div key={index} className="card ">
                     <div className="card-parent-circle">
                         <div className="arrow-down"></div>
                         <div className="cicle-down"></div>
                         <div className="card-circle"></div>
                         </div>
                         <div className="card-step"></div><p>{item}</p></div>)}
            </div > : null) }
        </div>
       
    )
}

export default Stage ;