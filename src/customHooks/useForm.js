import { useState, useEffect } from 'react';

const useForm = (callback, validationRules, requiredFields) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [submitAction, setSubmitAction] = useState(false);

  useEffect(() => {
    // submit form if no errors
    if (Object.keys(values).length === requiredFields.length
      && Object.values(errors).filter(error => error).length === 0
      && submitAction) {
      callback();
    }
  }, [errors]);

  const handleSubmit = event => {
    if (event) { event.preventDefault(); }
    let loggedErrors = validationRules(values, 'all', errors, requiredFields)
    setErrors(loggedErrors)
    setSubmitAction(true);
  }

  const handleChange = event => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  const handleValidation = event => {
    event.persist()
    setErrors(validationRules(values, event.target.name, errors, requiredFields));
  }

  return { handleChange, handleSubmit, handleValidation, values, errors }
}

export default useForm;