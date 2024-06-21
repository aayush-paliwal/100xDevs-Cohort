import React, { Suspense, useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
// import Dashboard from './components/LearnRoutes/Dashboard';
// import LandingPage from './components/LearnRoutes/LandingPage';

// Syntax for lazy loading of the component
const Dashboard = React.lazy(() => import("./components/LearnRoutes/Dashboard"))
const LandingPage = React.lazy(() => import("./components/LearnRoutes/LandingPage"))
import RouterPart from './components/RouterPart';
import PropDrillPart from './components/PropDrillPart';
import './App.css'
import Main from './components/LearnContextApi/Main';


function App() {

  return (
    <div>
      <RouterPart />
      <Routes>
          <Route path='/dashboard' element={<Suspense fallback={"Loading.."}><Dashboard/></Suspense>} />
          <Route path='/' element={<Suspense fallback={"Loading.."}><LandingPage/></Suspense>} />
      </Routes>

      <PropDrillPart />
      <Main/>
    </div>
  )
}

export default App
