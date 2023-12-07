import React from 'react'
import './Homepage.css'
import ContactForm from '../ContactForm/ContactForm'
import AboutUs from '../AboutUs/AboutUs'
import Header from '../Header/Header'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import Test from '../Testimonial/Test'


export const Homepage = () => {
  return (
    <div>
      <Header />
      <h1 className="homepage">Hello</h1>
      <AboutUs />
      <Services />
      <Test />
      <ContactForm/>
      <Footer />
    </div>
  )
}
