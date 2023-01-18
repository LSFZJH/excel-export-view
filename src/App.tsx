import React from 'react';
import './App.css';
import Entrance from './pages/Entrance';
import ChartsView from './pages/view/ChartsView';

function App() {
  return (
    <div className="App">
      <Entrance
        text='导入Excel' 
      />
      <ChartsView/>
    </div>
  );
}

export default App;
