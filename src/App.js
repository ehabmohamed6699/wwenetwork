
import './App.css';
import Navbar from './components/navbar/navbar';
import Carousel from './components/carousel/carousel';
import Shows from './components/shows/shows';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <p className='display-6 text-center my-5' id="shows">SHOWS</p>
      <Shows/>
      <Footer/>
    </>
  );
}

export default App;
