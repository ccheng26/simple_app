import Header from './Header.js';

const styles = {
  container: {
    textAlign: 'center',
    border: '1px grey solid',
    borderRadius: '20%',
    padding: '10%',
    fontFamily: 'Arial'
  }
}

const Container = ({ pageHeader, contents }) => (
  <div className='container' style={styles.container}>
    <Header pageHeader={pageHeader} />
    {contents}
  </div>
)

export default Container;