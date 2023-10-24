
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyBook from './components/MyBook';
import { Container } from 'react-bootstrap'


function App() {
  return (
    <Container>
      <MyNav />
     
      <MyBook />
      <MyFooter />
    </Container>
  )
}

export default App

 
     
 
  

