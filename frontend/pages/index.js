import Container from '../components/container'
import Login from '../containers/LoginContainer.js'
import Signup from '../containers/SignUpContainer.js'

const App = () => (
  <div style={{ padding: '5% 20%' }}>
    <Container 
      contents ={<Login />}
      pageHeader={`Login`}
    />
  </div>
)

export default App;