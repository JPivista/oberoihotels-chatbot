import React from 'react'
import BannerSlider from "../HomeComponents/BannerSlider"
import OberoiSelect from './OberoiSelect'
import WhatStirs from './WhatStirs'
import BookDirect from './BookDirect'
import ExperienceSlider from './Experiences'
import MayweOffer from "./MayweOffer"
import Stories from "./Stories"
import OberoiByYou from "./OberoiByYou"
import Recognition from "./Recognition"
const index = () => {
    return (
        <div>
            <BannerSlider />
            <OberoiSelect/>
            <WhatStirs/>
            {/* <BookDirect/> */}
            <ExperienceSlider/>
            <MayweOffer />
            <Stories />
            <OberoiByYou />
            <Recognition />
        </div>
    )
}

export default index
