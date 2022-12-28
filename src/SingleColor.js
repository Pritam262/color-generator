import React, { useEffect, useState } from 'react'
import rgbToHex from './utils';
function SingleColor({rgb,weight,index,hexColor}) {
const [alert, setAlert] = useState(false);
const bcg = rgb.join(',')
// console.log(bcg)
const hex = rgbToHex(...rgb)
const hexValue = `#${hexColor}`
useEffect(() => {
  const timeout = setTimeout(() => {
    setAlert(false)
  }, 2500);
  return ()=>clearTimeout(timeout)
}, [alert])

  return (
    <article className={`color ${index>9 && 'color-light'}`} style={{backgroundColor : `rgb(${bcg})`}} onClick={()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue)

    }}>
        <p className="percent-value">{weight}%</p>
        {/* <p className="color-value">{hex}</p> */}
        <p className="color-value">{hexValue}</p>
        {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor