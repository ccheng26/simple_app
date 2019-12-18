import PropTypes from 'prop-types';

const styles ={
  spacedInputs: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  formLabel: {
    textTransform: 'capitalize'
  },
  inputField: {
    border: 'none',
    border: '1px solid grey',
    borderRadius: '3px'
  }
}

const InputField = ({inputLabelId, labelName, labelText, inputType='text', onChangeHandler, inputVal, formName, inputWidth='50%'}) => {
  const useReqLabelId = (propVal, secondaryPropVal) => propVal || secondaryPropVal || inputLabelId
  console.log(inputType)
  // console.log(inputVal)
  return (
    <div className='form-group' style={{margin: '1%', ...(inputWidth==='100%' ? {textAlign:'left'} : styles.spacedInputs)}}>
      <label className='form-label' style={styles.formLabel} htmlFor={inputLabelId}>{useReqLabelId(labelName)}</label>
      <input 
        style={{...styles.inputField, width: inputWidth}}
        id={inputLabelId}
        name={useReqLabelId(labelName)}
        type={inputType}
        aria-required="true"
        aria-labelledby={`${formName} ${useReqLabelId(labelText, labelName)}`.trimLeft()}
        onChange={onChangeHandler}
        value={inputVal}
      />
    </div>
  )
}

InputField.propTypes={
  inputLabelId: PropTypes.string.isRequired,
  inputWidth: PropTypes.string,
  labelName: PropTypes.string,
  labelText: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  inputVal: PropTypes.string.isRequired,
  // inputType: PropTypes.string.isRequired,
  formName: PropTypes.string
}

export default InputField;