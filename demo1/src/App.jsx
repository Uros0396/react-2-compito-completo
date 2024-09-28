import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import MainSezione from './components/MainSezione'
import Footer from './components/Footer'
import SearchContext from './components/SearchContext'
import { useState } from 'react'

/*function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <MainSezione />
      <Footer />
    </>
  );
}

export default App*/

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
        <MyNav />
        <Welcome />
        <MainSezione />
      </SearchContext.Provider>
      <Footer />
    </>
  )
}

export default App

