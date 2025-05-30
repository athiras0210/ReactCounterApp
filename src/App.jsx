import './App.css';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Header from './Components/Header';


function App() {
  return (
    <div className="app-container">
      <Header/>
      <Counter/>
      <Footer/>
    </div>
  );
}

export default App;
