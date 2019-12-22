import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import useForm from '../customHooks/useForm';
import { validateLogin } from '../formValidationUtils'

const style = {
  buttonContainer: {
    display: 'flex',
    margin: '5% 0',
    justifyContent: 'space-evenly'
  }
}

const LoginForm = () => {
  const { values, handleChange, handleSubmit, handleValidation, errors } = useForm(login, validateLogin, ['username', 'password']);
  function login() {
    console.log(values)
  }
  const formName = 'Login'
  async function login() {
    await handleAPIRequest("POST", '/login', values)
  }
  return (
    <form id={formName}>
      {/* not using a map here, overkill for two fields that will most likely not change*/}
      <InputField
        inputWidth='100%'
        inputLabelId='username'
        onChangeHandler={handleChange}
        onBlurHandler={handleValidation}
        inputVal={values.username || ''}
        hasError={errors.username}
        formName={formName}
        required
      />
      <InputField
        inputWidth='100%'
        inputLabelId='password'
        inputType='password'
        onChangeHandler={handleChange}
        onBlurHandler={handleValidation}
        inputVal={values.password || ''}
        hasError={errors.password}
        formName={formName}
        required
      />
      <div className='buttonContainer' style={style.buttonContainer}>
        <Button id='loginButton' buttonColor='green' buttonText='Login' onClickCallback={handleSubmit} />
        <Button id='signUpButton' buttonColor='blue' buttonText='Sign Up' onClickCallback={() => window.location = '/signup'} />
      </div>
    </form>
  )
}

export default LoginForm;