import React, { useState, Fragment } from 'react';
import InputField from '../components/InputField'

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const formName = 'Sign Up'
  return (
    <Fragment>
      <InputField
        inputLabelId='firstName'
        labelName='First Name'
        onChangeHandler={e => setFirstName(e.target.value)}
        inputVal={firstName}
        formName={formName}
      />
      <InputField
        inputLabelId='lastName'
        labelName='Last Name'
        onChangeHandler={e => setLastName(e.target.value)}
        inputVal={lastName}
        formName={formName}
      />
      <InputField
        inputLabelId='email'
        inputType='email'
        onChangeHandler={e => setEmail(e.target.value)}
        inputVal={email}
        formName={formName}
      />
      <InputField
        inputLabelId='username'
        onChangeHandler={e => setUsername(e.target.value)}
        inputVal={username}
        formName={formName}
      />
      <InputField
        inputLabelId='password'
        inputType='password'
        onChangeHandler={e => setPassword(e.target.value)}
        inputVal={password}
        formName={formName}
      />
      <InputField
        inputLabelId='passwordConfirm'
        labelName='Confirm Password'
        inputType='password'
        onChangeHandler={e => setPasswordConfirm(e.target.value)}
        inputVal={passwordConfirm}
        formName={formName}
      />
    </Fragment>
  )
}

export default SignUpForm;