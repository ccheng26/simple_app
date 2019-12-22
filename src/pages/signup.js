import Container from '../components/container'
import SignupForm from '../containers/SignUpContainer.js'

const Signup = () => (
  <div style={{ padding: '5% 20%' }}>
    <Container
      contents={<SignupForm />}
      pageHeader={`Create a New Account`}
    />
  </div>
)

export default Signup;