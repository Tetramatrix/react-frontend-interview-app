import React, { useState } from 'react'

interface LastNStepProps {
  cb: (field: string, value: string) => void
}

const LastNStep: React.FC<LastNStepProps> = (props) => {
  
  const [LastN, setLastN] = useState('')
  let [errorMsg, seterrorMsg] = useState('')
  
  function handle () {  
    if (/^[a-zA-Z0-9]+$/.test(LastN) ) {
      props.cb('LastN', LastN)
    } else {
      props.cb('LastN', 'errorMsg')
      seterrorMsg( errorMsg = 'Not a valid last name!')
    }
  }
  
  return (
    <>
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
      <div className="fail">{errorMsg}</div>
      <button onClick={handle}>Next</button>
    </>
  )
}

export default LastNStep
