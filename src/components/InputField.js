import PropTypes from 'prop-types';
import { Fragment } from 'react'
import { camelToTitle } from '../utils'
import COLORS from '../colors'

const styles = {
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
    borderRadius: '3px',
  },
  errorText: {
    color: COLORS.text.error,
    margin: 0,
    fontSize: '10px'
  }
}

const InputField = ({ inputLabelId, labelName, labelText, inputType = 'text', onChangeHandler, inputVal, formName, inputWidth = '50%', required, hasError, onBlurHandler }) => {
  const useReqLabelId = (propVal, secondaryPropVal) => propVal || secondaryPropVal || inputLabelId
  const formatLabel = camelToTitle(useReqLabelId(labelName))
  return (
    <Fragment>
      <div className='form-group' style={{ margin: '1%', ...(inputWidth === '100%' ? { textAlign: 'left' } : styles.spacedInputs) }}>
        <label className='form-label' style={styles.formLabel} htmlFor={inputLabelId}>{formatLabel}</label>
        <div style={{ textAlign: 'left', width: inputWidth }}>
          <input
            style={{ ...styles.inputField, width: inputWidth }}
            id={inputLabelId}
            name={inputLabelId}
            type={inputType}
            aria-required="true"
            aria-labelledby={`${formName} ${useReqLabelId(labelText, inputLabelId)}`.trimLeft()}
            aria-describedby={`${inputLabelId}_error`}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            value={inputVal}
            required={required}
          />
          {hasError && (<p id={`${inputLabelId}_error`} style={styles.errorText}>{hasError}</p>)}
        </div>
      </div>
    </Fragment>
  )
}

InputField.propTypes = {
  inputLabelId: PropTypes.string.isRequired,
  inputWidth: PropTypes.string,
  labelName: PropTypes.string,
  labelText: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
  inputVal: PropTypes.string.isRequired,
  onBlurHandler: PropTypes.func,
  formName: PropTypes.string
}

export default InputField;