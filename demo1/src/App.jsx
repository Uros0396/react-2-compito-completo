import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import Welcome from './components/Welcome'
import MainSezione from './components/MainSezione'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <MainSezione />
      <Footer />
    </>
  );
}

export default App
