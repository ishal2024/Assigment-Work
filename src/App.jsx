import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import HowItWorks from './Components/HowItWorks'
import WhyToChooseUs from './Components/WhyToChooseUs'
import Comments from './Components/Comments'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux'

function App() {

  const state = useSelector((state) => state.theme)

    useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,    
    });
  }, []);

  return (
    <>

     <div className={`${state.mainbgColor}   overflow-x-hidden`}>
     <Header />
     <Hero />
     <HowItWorks />
     <WhyToChooseUs />
     <Comments />
     <ContactForm />
    <Footer />
    </div>
    </>
  )
}

export default App
