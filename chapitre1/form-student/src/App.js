import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Form from './components/Form'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="subContainer">
          <Homepage />
          <Form />
        </div>
    </BrowserRouter>
  );
}

export default App;
