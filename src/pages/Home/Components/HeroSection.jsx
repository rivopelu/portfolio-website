import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { BtnComp } from '../../../components'
import GambarHero from './Heo.svg'
const HeroSection = () => {
    return (
        <div className='flex min-h-[91vh] items-center justify-center lg:flex-row flex-col  lg:justify-between pt-5 lg:pt-0'>
            <div className="kiri lg:w-1/2"><img src={GambarHero} alt="" /></div>
            <div className="kanan lg:w-1/2 pt-6 lg:pt0">
                <h1 className='text-blue-700 text-5xl lg:text-6xl font-bold'>Hello !</h1>
                <p className='text-2xl lg:text-3xl'>I’m Rivo, a front end developer.</p>
                <p className='text-xl text-gray-500'>What separates design from art is that design is meant to be… functional.</p>
                <div className='bg-blue-700 w-fit px-6 py-1 text-white flex items-center gap-3 mt-2 cursor-pointer hover:-translate-y-1 duration-200 hover:bg-blue-900'>
                    <div>About Me</div>
                    <FontAwesomeIcon icon={faArrowDown} className='flex animate-bounce' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection