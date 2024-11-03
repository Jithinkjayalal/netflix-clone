import React from 'react'
import "./HomwScreen.css"
import Nav from './Nav'
import Banner from './Banner'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>

        <Banner/>
        {/* rows */}
    </div>
  )
}

export default HomeScreen