import React from 'react'
import ImgSlider from '../components/ImgSlider'
import AccouncementBar from '../components/AccouncementBar'
import AboutSection from '../components/AboutSection'
import News from '../components/News'
import Notice from '../components/Notice'
import Event from '../components/Event'
import NatiionalPortals from '../components/NatiionalPortals'

const Home = () => {
  return (
    <div>
      <ImgSlider />
      <AccouncementBar />
      <AboutSection />
      <div className='flex justify-center gap-5 px-2 mx-auto flex-wrap'>
        <News />
        <Notice />
        <Event />
      </div>
      <NatiionalPortals/>
    </div>
  )
}

export default Home