import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skill from './components/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Skill></Skill>
    </div>
  );
}

export default App;
