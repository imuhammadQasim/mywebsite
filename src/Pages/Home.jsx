import React from 'react'
import Hero from './Hero'
import MyComponent from '../Components/MyComponent'
import HA from './HA'
import Whychosose from './WhyChoose'
import Testimonials from './Testimonials'
import CodeHero from '../Components/CodeHero'
import CodeCrack from '../Components/CodeCrack'
import Gradient from '../Components/Gradient'
const Home = () => {
  return (
    <div>
      <CodeHero/>
      <CodeCrack/>
      <Gradient/>
      <Whychosose/>
      <MyComponent/>
      <HA/>
      <Testimonials/>
    </div>
  )
}

export default Home
