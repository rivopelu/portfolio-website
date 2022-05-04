import React from 'react'
import { PageTitle } from '../../../components'

const AboutPage = () => {
    return (
        <div id='about' className='aboutPage'>
            <PageTitle title={'About Me'} className={'mb-5'} />
            <div className="card w-full bg-white shadow-lg rounded-lg px-4 lg:py-2 lg:px-2 relative py-4  flex flex-col lg:flex-row gap-3 lg:items-center justify-between mb-6">
                <div className="Kiri lg:w-[60%] xl:text-2xl lg:px-10 lg:text-lg">Hello there, I'm Rivo Pelu, my full name is: Praysingzky Rivo Pelu,
                    born on the 30th june 2001.
                    I come from Bitung City, North Sulawesi Province, Indonesia.
                    I can communicate in Indonesian and also in English.
                </div>
                <div className="kiri back-1  lg:w-[40%] xl:w-[30%] rounded-lg h-48">

                </div>
            </div>



            {/* Page title 2 */}
            <PageTitle title={'My Education'} className={'mb-5 lg:text-right'} />
            <div className="card w-full bg-white shadow-lg rounded-lg px-4 lg:py-2 lg:px-2 relative py-4  flex flex-col lg:flex-row-reverse gap-3 lg:items-center justify-between mb-6">
                <div className="Kiri lg:w-[60%] xl:text-2xl lg:px-10 lg:text-lg">I graduated from Bitung Christian High School, in 2019. and before that I also attended Bitung State Junior High School.
                </div>
                <div className="kiri back-2  lg:w-[40%] xl:w-[30%] rounded-lg h-48">

                </div>
            </div>


            <PageTitle title={'Getting to Know Programming'} className={'mb-5 text-xl lg:text-md'} />
            <div className="card w-full bg-white shadow-lg rounded-lg px-4 lg:py-2 lg:px-2 relative py-4  flex flex-col lg:flex-row gap-3 lg:items-center justify-between mb-6">
                <div className="Kiri lg:w-[60%] xl:text-2xl lg:px-10 lg:text-lg">I started my career as a programmer since 2021 by studying HTML, CSS, and JavaScrip. and constantly learning. i started my first commit on github in october 2021, and since then i've been continuously developing my programming skills up to now.
                </div>
                <div className="kiri back-3  lg:w-[40%] xl:w-[30%] rounded-lg h-48">

                </div>
            </div>


        </div>
    )
}

export default AboutPage