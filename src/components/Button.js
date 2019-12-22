import COLORS from '../colors'

const styles = {
  baseButtonStyle: {
    padding: '0',
    font: 'inherit',
    cursor: 'pointer',
    outline: 'inherit',
    padding: '1.5% 5%',
    borderRadius: '10px',
    fontWeight: 'bold'
  }
}

const Button = ({ id, buttonText, onClickCallback, buttonColor }) => (
  <button id={id} className='button'
    onClick={onClickCallback}
    type='button'
    style={{
      background: COLORS.button.background[buttonColor],
      border: `${COLORS.button.border[buttonColor]} solid 1px`,
      ...styles.baseButtonStyle
    }}>
    {buttonText}
  </button>
)

export default Button;