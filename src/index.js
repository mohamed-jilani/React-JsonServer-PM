import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar, Footer } from './Pages/Layout';
import { Products } from './Pages/Products';
import { Home } from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App(){
  return(
    <>
    <BrowserRouter>
    
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
      <Footer />

    </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

