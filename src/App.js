import "./App.css";
import "./i18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./Components/Layout/Layout";

// Create some basic page components for demonstration
const Home = () => (
  <div className="container mt-5 pt-4">
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
  </div>
);

const About = () => (
  <div className="container mt-5 pt-4">
    <h1>About Page</h1>
    <p>Learn more about us!</p>
  </div>
);

const Services = () => (
  <div className="container mt-5 pt-4">
    <h1>Services Page</h1>
    <p>Our amazing services!</p>
  </div>
);

const Contact = () => (
  <div className="container mt-5 pt-4">
    <h1>Contact Page</h1>
    <p>Get in touch with us!</p>
  </div>
);

const Learning = () => (
  <div className="container mt-5 pt-4">
    <h1>Learning Page</h1>
    <p>Explore our learning programs!</p>
  </div>
);

const Graduates = () => (
  <div className="container mt-5 pt-4">
    <h1>Hire Graduates</h1>
    <p>Find talented graduates for your company!</p>
  </div>
);

const Partnership = () => (
  <div className="container mt-5 pt-4">
    <h1>Partnership</h1>
    <p>Partner with us for success!</p>
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="contact" element={<Contact />} />
              <Route path="learning" element={<Learning />} />
              <Route path="graduates" element={<Graduates />} />
              <Route path="partnership" element={<Partnership />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
