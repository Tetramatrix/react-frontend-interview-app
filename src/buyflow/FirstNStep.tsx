import React, { useState } from 'react'

interface FirstNStepProps {
  cb: (field: string, value: string) => void
}

const FirstNStep: React.FC<FirstNStepProps> = (props) => {
  
  const [FirstN, setFirstN] = useState('')
  let [errorMsg, seterrorMsg] = useState('')
  
  function handle () {  
    if (/^[a-zA-Z0-9]+$/.test(FirstN) ) {
      props.cb('FirstN', FirstN)
    } else {
      props.cb('FirstN', 'errorMsg')
      seterrorMsg( errorMsg = 'Not a valid first name!')
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
      <div className="fail">{errorMsg}</div>
      <button onClick={handle}>Next</button>
    </>
  )
}

export default FirstNStep
