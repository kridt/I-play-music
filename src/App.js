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
import Callback from './pages/Callback';
import TokenContext from "./TokenContext";
import { useState } from 'react';

function App() {
  var tokenState = useState(null);
  
  return (

    <TokenContext.Provider value={tokenState}>
      <Router className="App">
      <LogIn default />
      <Walkthrough1 path="/Walkthrough1.html" />
      <Walkthrough2 path="/Walkthrough2.html" />
      <Featured path="/Featured" />
      <Categories path="/Categories"/>
      <Albums path="/Albums" />
      <SimplePlayer path="/SimplePlayer" />
      <Playlists path="/Playlists" />
      <Callback path="/callback" />
    </Router>
    </TokenContext.Provider>
  );
}

export default App;
