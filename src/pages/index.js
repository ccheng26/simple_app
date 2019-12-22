import { useState, useEffect } from 'react'
import Container from '../components/container'
import Login from '../containers/LoginContainer.js'
import UserPage from '../containers/UserContainer.js'

const App = () => {
  let [initialLoad, setInitialLoad] = useState(null);
  let [userData, setUserData] = useState(null);
  if (userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }
  useEffect(() => {
    let userDetails = localStorage.getItem('userData')
    if (!initialLoad) {
      setUserData(JSON.parse(userDetails))
      setInitialLoad(true)
    }
  })
  return <div style={{ padding: '5% 20%' }}>
    {initialLoad ?
      <Container
        contents={
          userData ?
            <UserPage userData={userData} setUserData={setUserData} /> :
            <Login loginResponse={setUserData} />
        }
        pageHeader={userData ? 'Hello World!!!' : `Login`}
      />
      : null}
  </div>
}


export default App;