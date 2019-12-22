import { camelToTitle } from './utils'

export const returnReqError = (value, fieldName, reqList) => (
  reqList.includes(fieldName) && !value ? `${camelToTitle(fieldName)} is required.` : ''
)

export const baseLevelValidation = (values, fieldName, prevErrors, requiredFields, customFieldValidation) => {
  let errors = { ...prevErrors };
  if (fieldName === 'all') { //validate all at once
    for (let inputName in requiredFields) {
      fieldName = requiredFields[inputName]
      errors = {
        [requiredFields[inputName]]: returnReqError(values[fieldName], fieldName, requiredFields),
        ...errors
      }
    }
  } else {
    errors[fieldName] = returnReqError(values[fieldName], fieldName, requiredFields)
    if (customFieldValidation) {
      errors = { ...errors, ...customFieldValidation(values, fieldName, errors) }
    }
  }
  return errors;
}

export function validateSignIn(values, fieldName, prevErrors, requiredFields) {
  const signInCustomValidation = (values, fieldName, errors) => {
    let { password, confirmPassword, email } = values
    switch (fieldName) {
      case 'password':
        errors[fieldName] = (!password || password.length < 8) && 'Password must be 8 or more characters';
        break;
      case 'confirmPassword':
        errors[fieldName] = password && password !== confirmPassword ? 'Passwords do not match' : errors[fieldName];
        break;
      case 'email':
        errors[fieldName] = !(/\S+@\S+\.\S+/.test(email)) && 'Email Address is not valid';
        break;
    }
    return errors
  }
  return baseLevelValidation(values, fieldName, prevErrors, requiredFields, signInCustomValidation);
};

export function validateLogin(values, fieldName, prevErrors, requiredFields) {
  return baseLevelValidation(values, fieldName, prevErrors, requiredFields);
};