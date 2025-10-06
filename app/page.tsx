import React from 'react';
import  Home  from './components/Home';
import  Footer  from './components/Footer';
import { Navbar } from './components/Navbar';
import Shop from './shop/page';
import Bestellers from './bestellers/page';
export default function page() {
  return (
    <>
     <Navbar />
      <Home />
      
    </>
  );
}
