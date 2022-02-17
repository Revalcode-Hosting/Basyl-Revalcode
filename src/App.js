import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
/* COMPONENTS */
import ExploreSolutions from './components/ExploreSolutions';
import AboutUs from './components/AboutUs';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <ExploreSolutions/>
      
      <AboutUs/>

      <Form/>
    </div>
  );
}

export default App;
