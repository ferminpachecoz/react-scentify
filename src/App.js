import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import PreLoader from './components/PreLoader';
import ProductFeatures from './components/ProductFeatures';
import VideoTutorial from './components/VideoTutorial';

function App() {
  return (
    <>
      <PreLoader />
      <Header />
      <Features />
      <About />
      <ProductFeatures />
      <VideoTutorial />
      <Contact />
      <Footer />
      <a href="#" className="back-to-top"><i className="lni lni-chevron-up"></i></a>
    </>
  );
}

export default App;
