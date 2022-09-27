import React from "react";
import { GlobalStyle } from './styles/GlobalStyle'
import Header from './pages/Header'
import Main from './pages/Main'
import Footer from './pages/Footer'

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

