import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* COMPONENTS */
import ExploreSolutions from './components/ExploreSolutions';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <ExploreSolutions/>
      
      <AboutUs/>
    </div>
  );
}

export default App;
