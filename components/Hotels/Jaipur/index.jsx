import React from 'react'
import BannerSlider from './Banner'
import LimitedOffer from './LimitedOffer'
import WelcomeSlider from './WelcomeSlider'
import MayWeSlider from './MayWe'
import WhereWouldYouSlider from './WhereWouldYou'
import Relax from "./Relax"
import Experience from "./Experience"
import MayWeOfferSlider from './MayweOffer'
import Exploring from "./Exploring"
import Recognition from "./Recognition"
import WhatStirs from '@/components/HomeComponents/WhatStirs'
import StoriesSlider from '@/components/HomeComponents/Stories'
const index = () => {
  return (
    <div>
      <BannerSlider/>
      <LimitedOffer/>
      <WelcomeSlider/>
      <MayWeSlider/>
      <WhereWouldYouSlider/>
      <Relax />
      <Experience />
      <MayWeOfferSlider/>
      <Exploring/>
      <Recognition/>
      <WhatStirs/>
      <StoriesSlider/>
    </div>
  )
}

export default index
