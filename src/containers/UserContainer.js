import React, { Fragment } from 'react';
import Button from '../components/Button';

const style = {
  nameContainer: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0% 5%'
  },
  otherInfoContainer: {
    padding: '0% 5% 5% 5%',
    textAlign: 'left'
  }
}

const UserContainer = ({ userData, setUserData }) => {
  let { first_name, last_name, email, username } = userData
  return <Fragment>
    <div style={style.nameContainer}>
      <div>{first_name}</div>
      <div>{last_name}</div>
    </div>
    <div style={style.otherInfoContainer}>
      <br />
      {email}
      <br />
      <br />
      {username}
      <br />
    </div>
    <Button id='logout' buttonColor='orange' buttonText='Bye Bye' onClickCallback={() => { localStorage.clear(); setUserData(null) }} />
  </Fragment>
}

export default UserContainer;