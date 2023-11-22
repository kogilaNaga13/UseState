import React from 'react'
import './index.css'

const Object = (props) => {
    const {res} = props;
    const res1 = res.map((e)=>{
        return(
            <div>
                <div className='detta'>
                    <li>{e.name}</li>
                    <li>{e.skills[0].name}</li>
                    <li>{e.skills[0].type    }</li>
                </div>
            </div>
        )
    })
  return (
    <div>
        <ol>
        {res1}
        </ol>
        
    </div>
  )
}

export default Object