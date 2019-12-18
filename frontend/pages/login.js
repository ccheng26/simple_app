import React, { useState, Fragment } from 'react';
import InputField from '../components/InputField';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const formName = 'Login'
  return (
    <Fragment>
      <InputField
        inputWidth='100%'
        inputLabelId='username'
        onChangeHandler={e => setUsername(e.target.value)}
        inputVal={username}
        formName={formName}
      />
      <InputField
        inputWidth='100%'
        inputLabelId='password'
        inputType='password'
        onChangeHandler={e => setPassword(e.target.value)}
        inputVal={password}
        formName={formName}
      />
    </Fragment>
  )
}

export default LoginForm;