import React, { useState } from 'react'
import Name from "./interfaces";

interface NameStepProps {
  cb: (field: string, value: Name) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  
  const [FirstN, setFirstN] = useState('')
  const [LastN, setLastN] = useState('')
  let [errorMsgFN, seterrorMsgFN] = useState('')
  let [errorMsgLN, seterrorMsgLN] = useState('')
  
  function handle () {  
    
    var re = /^[a-zA-Z0-9'-]+$/
    
    if (re.test(FirstN) && re.test(LastN) ) {
        
      props.cb('name', { FirstN, LastN } )
      
    } else if (!re.test(FirstN)) {
      seterrorMsgFN( errorMsgFN = 'Not a valid first name!')
    } 
    if (!re.test(LastN)) {
      seterrorMsgLN( errorMsgLN = 'Not a valid last name!')
    }
    
  }
  
  return (
    <>
      <div>
        First name:{' '}
        <input
          type="FirstN"
          onChange={({ target: { value } }) => {
            setFirstN(value)
          }}
          value={FirstN}
        ></input>
      </div>
      <div className="fail">{errorMsgFN}</div>
      <div>
        Last name:{' '}
        <input
          type="LastN"
          onChange={({ target: { value } }) => {
            setLastN(value)
          }}
          value={LastN}
        ></input>
      </div>
      <div className="fail">{errorMsgLN}</div> 
      <button onClick={handle}>Next</button>
    </>
  )
}

export default NameStep
