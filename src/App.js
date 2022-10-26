import './App.css';
import About from './components/about';
import Gallery from './components/gallery';
import Nav from './components/nav';
import ContactForm from './components/contact';
import React, {useState} from 'react';



function App() {
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav  categories={categories} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
      <main>
        <ContactForm />
        <Gallery currentCategory={currentCategory} />
        <About />
      </main>
    </div>
  );
}

export default App;
