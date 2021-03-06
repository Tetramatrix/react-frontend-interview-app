import React, { useState } from 'react'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  
  const [age, setAge] = useState(0)
  let [errorMsg, seterrorMsg] = useState('')
  
  function handle () {  
    if (age > 0) {
      props.cb('age', age)
    } else {  
      seterrorMsg( errorMsg = 'Not a valid age!')
    }
  }
  
  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value))
          }}
          value={age}
        ></input>
      </div>
      <div className="fail">{errorMsg}</div>
      <button onClick={handle}>Next</button>
    </>
  )
}

export default AgeStep
