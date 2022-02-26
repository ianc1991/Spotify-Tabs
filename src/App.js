import './App.css';
import Router from './Routes/Router';
import {AuthContextProvider} from './Context/AuthContext';

function App() {
  return (
    <div className="App">
          <Router />
    </div>
  );
}

export default App;
