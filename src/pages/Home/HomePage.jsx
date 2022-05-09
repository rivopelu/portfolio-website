import React from 'react'
import AboutPage from './Components/AboutPage'
import HeroSection from './Components/HeroSection'
import ProjectHomeSection from './Components/ProjectHomeSection'
import './home.scss'

const HomePage = () => {
    return (
        <section className="containerMain h-full HomePage ">
            <HeroSection />

            <div className="garis-batas-homepage mb-20">

            </div>
            <AboutPage />
            <ProjectHomeSection />
        </section>
    )
}

export default HomePage