import Container from '../components/container'
import Signup from '../containers/SignUpContainer.js'

const SignUp = () => (
  <div style={{ padding: '5% 20%' }}>
    <Container
      contents={<Signup />}
      pageHeader={`Create a New Account`}
    />
  </div>
)

export default SignUp;