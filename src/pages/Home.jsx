import React from 'react'
import Hero from '../components/Hero'
import WhoweAre from '../components/WhoweAre'
import Achievements from '../components/Achievements'
import Strategy from '../components/Strategy'
import CardsHome from '../components/CardsHome'
import Faq from '../components/Faq'
import Gmail from '../components/Gmail'
import ServiceHeading from '../components/ServiceHeading'
import Services from '../components/Services'
import TestimonialsTabs from '../components/TestimonialsTabs'
import TeamSection from '../components/TeamSection'

const Home = () => {
  return (
    <>
      <div className='py-0'>
        <Hero />
        <WhoweAre />
        <Achievements />
        <Strategy />
        <CardsHome />
        <ServiceHeading/>
        <Services />
        <TestimonialsTabs />
        <Faq />
        <TeamSection />
        <Gmail />
      </div>
    </>
  )
}
export default Home