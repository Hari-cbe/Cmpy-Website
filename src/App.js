import './App.css';
import { Homepage } from './Components/HomePage/Homepage';
import { AboutUs }  from './Components/AboutUs/AboutUs'
import { Header } from './Components/Header/Header';
import { Services } from './Components/Services/Services';
import { Footer } from './Components/Footer/Footer';
import { ContactForm } from './Components/ContactForm/ContactForm';


function App() {
  return (
    <div>
      <Header />
      <Homepage/>
      <AboutUs />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}


export default App;
