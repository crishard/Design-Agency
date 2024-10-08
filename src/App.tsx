
import Footer from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import Portfolio from './components/Portfolio/Portfolio'
import { Subscribe } from './components/Subscribe/Subscribe'
import { Testimonials } from './components/Testimonials/Testmonials'
import { WhatWeDo } from './components/What we do/WhatWeDo'
import './index.css'


function App() {


  return (
    <>
      <Header />
      <main className=''>
        <WhatWeDo />
        <Portfolio />
        <Testimonials/>
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}

export default App
