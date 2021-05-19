import React, { useState } from 'react'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {

  const [email, setEmail] = useState('')
  let [errorMsg, seterrorMsg] = useState('')
  
  function handle () {  
    if (/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email) ) {
      props.cb('email', email)
    } else{
      props.cb('email', 'errorMsg')
      seterrorMsg( errorMsg = 'Not a valid e-mail address!')
    }
  }
  
  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        ></input>
      </div>
      <div className="fail">{errorMsg}</div>
      <button onClick={handle}>Next</button>
    </>
  )
}

export default EmailStep
