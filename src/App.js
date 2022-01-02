import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Navigation';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'Single-Page Websites',
      description: 'Single-Page websites'
    },
    {
      name: 'Multi-Page-Websites',
      description: 'A list of multi-page websites.'
    },
    {
      name: 'Utilities',
      description: 'Utilities'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
