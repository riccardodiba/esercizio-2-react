
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import MyBook from './components/MyBook';



function App() {
  return (
    <div>
  <header>
    <MyNav />
    </header>
    <main>
      <MyBook />
    </main>
    <footer>
      <MyFooter />
    </footer>
    </div>
    
 
     
 
  

);
}

export default App;
