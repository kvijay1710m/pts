import React from 'react'
import ServiceCards from '../components/Services/ServiceCards'
import ServiceCardstwo from '../components/Services/ServiceCardstwo'
import ServiceCardsThree from '../components/Services/ServiceCardsThree'
import Serviceslastcards from '../components/Services/Serviceslastcards'
import CaseStudies from '../components/Services/CaseStudies'
import Faqfull from '../components/Faqfull'

const Services = () => {
  return (
    <div>
        <ServiceCards />
        <ServiceCardstwo />
        <ServiceCardsThree />
        <Serviceslastcards />
        <CaseStudies />
        <Faqfull />
    </div>
  )
}

export default Services