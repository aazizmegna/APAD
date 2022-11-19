import About from './About';
import './App.css';
import './bootstrap.min.css';
import Carousel from './Carousel';
import Contact from './Contact';
import Facts from './Facts';
import Footer from './Footer';

import Header from './Header';
import Navbar from './Navbar';
import Services from './Services';
import Team from './Team';

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Carousel/>
      <About/>
      <Facts/>
      <Services/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
