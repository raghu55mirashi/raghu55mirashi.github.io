import React from 'react';
import Main from './Main';
import GlobalStore from './store/GlobalStore'

function App() {
  return (
    <GlobalStore>
       <Main />
    </GlobalStore>
  );
}

export default App;

