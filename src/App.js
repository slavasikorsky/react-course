import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

import heroImage from './assets/images/hero.png';
import './assets/css/_app.scss';

function App() {
  return (
      <>
        <Header />
        <Hero image={heroImage} />
        <Content />
        <Footer />
      </>
  );
}

export default App