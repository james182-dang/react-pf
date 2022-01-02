import React, { useState } from 'react';
import './style.css';
import About from './components/About';
import Nav from './components/Navigation';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'about',
      description: 'About James Lindsey'
    },
    {
      name: 'projects',
      description: 'A list of my smaller projects.'
    },
    {
      name: 'full projects',
      description: 'A list of full, functioning projects built from the ground up.'
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
