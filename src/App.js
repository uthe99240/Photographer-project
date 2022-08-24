import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
