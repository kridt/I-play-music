import './App.css';
import LogIn from './pages/LogIn';
import Walkthrough1 from './pages/Walkthrough1';
import { Router } from "@reach/router";
import Walkthrough2 from './pages/Walkthrough2';
import Featured from './pages/Featured';
import Categories from './pages/Categories';
import Albums from './pages/Albums';
import SimplePlayer from "./pages/SimplePlayer";
import Playlists from './pages/Playlists';

function App() {
  return (
    <Router className="App">
      <LogIn path="/" />
      <Walkthrough1 path="/Walkthrough1.html" />
      <Walkthrough2 path="/Walkthrough2.html" />
      <Featured path="/Featured" />
      <Categories path="/Categories"/>
      <Albums path="/Albums" />
      <SimplePlayer path="/SimplePlayer" />
      <Playlists path="/Playlists" />
    </Router>
  );
}

export default App;
