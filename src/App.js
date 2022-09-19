import React from 'react';
import { Route, Routes } from "react-router-dom";
import { CreateContainer, Header, MainContainer } from "./components";
import NavLinks from './components/NavLinks';

const App = () => {
  return (
    <div  className= "w-screen h-auto flex flex-col bg-slate-200">
        <Header/>
        
        <main className='mt-24 w-full p-8'>
        <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
    </div>
  )
}

export default App;