import type { Component } from 'solid-js';
import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";
import './../css/style.css';
const Home = lazy(() => import("./pages/Home"));
import Header from './modules/Header';


const App: Component = () => {
  return (
    <div>
      <Header />
    <Routes>
     
     <Route path="/" component={Home} />
    </Routes>
    </div>
     );
};

export default App;
