import React from 'react';
import Mynumber from '../context/number.jsx';
import Lowprop from './LowProp.jsx';

import './App.css'

function App() {
  return (
    <Mynumber.Provider value={{i:100}}>
        <Lowprop  />
    </Mynumber.Provider>
  )
}

export default App
