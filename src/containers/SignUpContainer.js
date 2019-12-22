import React, { useState, useEffect } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import useForm from '../customHooks/useForm';
import { validateSignIn } from '../formValidationUtils'
import { handleAPIRequest } from '../utils'
import AlertBox from '../components/AlertBox';

const style = {
  buttonContainer: {
    display: 'flex',
    margin: '5% 0',
    justifyContent: 'space-evenly'
  }
}

const SignUpForm = () => {
  const formInputFields = {
    'firstName': {
      fieldName: 'firstName' //only really need this field if we're customizing aspects of form field
    },
    'lastName': {
      fieldName: 'lastName'
    },
    'email': {
      fieldName: 'email',
      fieldType: 'email'
    },
    'username': {
      fieldName: 'username'
    },
    'password': {
      fieldName: 'password',
      fieldType: 'password'
    },
    'confirmPassword': {
      fieldName: 'confirmPassword',
      fieldType: 'password'
    }
  }
  const { values, handleChange, handleSubmit, handleValidation, errors } = useForm(signup, validateSignIn, Object.keys(formInputFields));
  let [apiResponse, setApiReponse] = useState('')
  let [apiErr, setApiErr] = useState(false)

  async function signup() {
    let response = await handleAPIRequest("POST", 'http://127.0.0.1:8000/signup', values)
    if (response.success) {
      setApiReponse(response.success)
      setApiErr(false)
      setTimeout(() => {
        setApiReponse('');
        window.location = '/'
      }, 5000);
    } else if (response.apiError) {
      setApiReponse(response.apiError)
      setApiErr(true)
    }
  }
  const formName = 'signup'
  return (
    <form id={formName}>
      {apiResponse && <AlertBox boxMessage={apiResponse} alertColor={apiErr ? 'red' : 'green'} />}
      {Object.keys(formInputFields).map(fieldName =>
        <InputField
          key={fieldName}
          {...(formInputFields[fieldName].fieldType ? { inputType: formInputFields[fieldName].fieldType } : {})}
          inputLabelId={fieldName}
          onChangeHandler={handleChange}
          onBlurHandler={handleValidation}
          inputVal={values[fieldName] || ''}
          hasError={errors[fieldName]}
          formName={formName}
          required
        />
      )}
      {/* If we wanted to add customizations could handle this differently ^ either via spread or optional handlers*/}
      <div className='buttonContainer' style={style.buttonContainer}>
        <Button id='backButton' buttonColor='grey' buttonText='Back' onClickCallback={() => location.href = '/'} />
        <Button id='createButton' buttonColor='blue' buttonText='Create' onClickCallback={handleSubmit} />
      </div>

    </form>
  )
}

export default SignUpForm;