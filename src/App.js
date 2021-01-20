import './App.css';
import LogIn from './pages/LogIn';
import Walkthrough1 from './pages/Walkthrough1';
import { Router } from "@reach/router";

function App() {
  return (
    <Router className="App">
      <LogIn path="/" />
      <Walkthrough1 path="/Walkthrough1.html" />
    </Router>
  );
}

export default App;
