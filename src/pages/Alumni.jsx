import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import AlumniComponent from '../Components/AluminiComponent'

function Alumni() {
  return (
    <div>
        <Navbar />
        <div className='mt-20'>
            <AlumniComponent />
        </div>
        <Footer />
    </div>
  )
}

export default Alumni