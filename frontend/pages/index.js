import Container from '../components/container'
import Login from './login'
import Signup from './signup'

const App =() => (
  <div style={{padding:'5% 20%'}}>
    <Container 
      contents ={<Signup />}
      pageHeader={`Create a New Account`}
      buttons ={<button>Back</button>}
    />
    {/* <Container 
      contents ={<Login />}
      pageHeader={`Login`}
      buttons ={<button>Back</button>}
    /> */}
  </div>
)

export default App;