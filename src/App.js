import './App.css';
import LogIn from './pages/LogIn';
import Walkthrough1 from './pages/Walkthrough1';
import { Router } from "@reach/router";
import Walkthrough2 from './pages/Walkthrough2';

function App() {
  return (
    <Router className="App">
      <LogIn path="/" />
      <Walkthrough1 path="/Walkthrough1.html" />
      <Walkthrough2 path="/Walkthrough2.html" />
    </Router>
  );
}

export default App;
