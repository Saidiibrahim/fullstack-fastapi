// src/App.tsx
import React from 'react';
import Routes from './Routes';
import Rocket from './svg/illustrations/Rocket';
import MyLogo from './svg/logos/MyLogo';

function App() {
  return (
    <div className="App">
      <div>
        <h2>Rocket Illustration</h2>
        <Rocket width={100} height={100} />
      </div>
      <div>
        <h2>My Logo</h2>
        <MyLogo width={100} height={100} />
      </div>
      <Routes />
    </div>
  );
}

export default App;

