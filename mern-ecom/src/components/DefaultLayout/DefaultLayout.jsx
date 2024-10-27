import React from 'react';
import {NavBar} from '../NavBar/NavBar';
import {Footer} from '../Footer/Footer';


export const DefaultLayout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}
