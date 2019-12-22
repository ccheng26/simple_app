import COLORS from '../colors'

const AlertBox = ({ boxMessage, alertColor }) => (
  <h1 className='header'
    style={{
      background: COLORS.textBox.background[alertColor],
      border: `1px solid ${COLORS.textBox.border[alertColor]}`,
      color: COLORS.textBox.text[alertColor],
      borderRadius: '.25rem'
    }
  }>
    {boxMessage}
  </h1>
)

export default AlertBox;