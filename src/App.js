import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="app">
      
      <Header />
    
      <div className="app_body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
    
    </div>
  );
}

export default App;
