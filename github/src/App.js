 
import './App.css';
import Feature from './components/Feature';
import Footer from './components/Footer';
 
import Hero from './components/Hero';
import Navbar from './components/navbar';
 

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Hero/>
       <Feature/>
       <Footer/>
        
    </div>
  );
}

export default App;
