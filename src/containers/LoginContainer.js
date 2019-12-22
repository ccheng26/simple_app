import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import useForm from '../customHooks/useForm';
import AlertBox from '../components/AlertBox'
import { validateLogin } from '../formValidationUtils'
import { handleAPIRequest } from '../utils'

const style = {
  buttonContainer: {
    display: 'flex',
    margin: '5% 0',
    justifyContent: 'space-evenly'
  }
}

const LoginForm = ({ loginResponse }) => {
  const { values, handleChange, handleSubmit, handleValidation, errors } = useForm(login, validateLogin, ['username', 'password']);
  const formName = 'Login'
  let [apiResponse, setApiReponse] = useState('')
  async function login() {
    let response = await handleAPIRequest("POST", 'http://127.0.0.1:8000/login', values)
    if (response.data) {
      loginResponse(response.data)
    } else if (response.apiError) {
      setApiReponse(response.apiError)
    }
  }
  return (
    <form id={formName}>
      {/* not using a map here, overkill for two fields that will most likely not change*/}
      {apiResponse && <AlertBox boxMessage={apiResponse} alertColor='red' />}
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