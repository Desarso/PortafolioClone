import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router"
import './../css/style.css';
import Home from './Pages/Home';
import Header from './modules/Header';


const App: Component = () => {
  return (
    <div>
      <Header />
    <Routes>
     
     <Route path="/" element={<Home/>} />
    </Routes>
    </div>
     );
};

export default App;
