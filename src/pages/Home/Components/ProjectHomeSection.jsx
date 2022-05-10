import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import macBookCinema from '../img/backbookCinema.png'
import phoneTiket from '../img/phoneTicket.png'
import sampah1Img from '../img/sampah-desktop.png'
import sampah2Img from '../img/sampah-mobile1.png'
import sampah3Img from '../img/sampahmobile2.png'
const ProjectHomeSection = () => {

    return (
        <div className='projectSectionHome' id='project'>
            <div className="flex items-center  my-7 text-3xl lg:text-4xl font-bold text-blue-700 border-b-2 border-t-2 py-3  lg:justify-center">
                <span>My Recent Project</span>
            </div>

            {/* Project */}
            <div className='flex flex-col gap-20'>


                <div>


                    {/* TIKET*/}
                    <div className="cinemasSection flex flex-col lg:flex-row  lg:items-center lg:justify-between ">
                        <div className="kiri lg:w-[60%]   border-r-4 mr-5">

                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-blue-600  h-7 w-7 lg:w-10 lg:h-10"></div>
                                <div className="text-2xl lg:text-4xl font-bold">Tiket App</div>
                            </div>
                            <div className="uppercase pl-[43px] lg:pl-14 pt-2 font-bold text-gray-600">Frontend Design For tiket App</div>
                        </div>
                        <div className="kanan mt-5 lg:mt-0">
                            a multi-platform application that was developed by 1 team that contributed together and one of them served as a frontend engineer. to make it easier to buy tickets, especially in the eastern and northern regions of Indonesia
                        </div>

                    </div>
                    <div className='flex  justify-center mt-6'>

                        <Link to={'/'} className='hover:text-blue-800 duration-200 text-blue-600 items-center flex gap-2'>
                            <span className='font-bold '>Read More</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className='flex items-center justify-center'>

                        <img className='mt-6 lg:w-1/3 mx-auto' src={phoneTiket} alt="" />
                    </div>
                </div>
                <div className="garis-batas-homepage  "></div>
                <div className=''>


                    {/* Cinemas */}
                    <div className="cinemasSection flex flex-col lg:flex-row  lg:items-center lg:justify-between border-b-3 ">
                        <div className="kiri lg:w-[60%]   border-r-4 mr-5">

                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-blue-600  h-7 w-7 lg:w-10 lg:h-10"></div>
                                <div className="text-2xl lg:text-4xl font-bold">Cinemas</div>
                            </div>
                            <div className="uppercase pl-[43px] lg:pl-14 pt-2 font-bold text-gray-600">Frontend Design cinema webApp</div>
                        </div>
                        <div className="kanan mt-5 lg:mt-0">
                            I'm trying to make a front end design for a cinema web application to make it easier to find movies, book tickets, and for a company profile in a company that provides a place to watch movies.
                        </div>

                    </div>
                    <div className='flex  justify-center mt-6 '>

                        <Link to={'/'} className='hover:text-blue-800 duration-200 text-blue-600 items-center flex gap-2'>
                            <span className='font-bold '>Read More</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>

                    <img className='mt-6 border-gray-200 border-b-2 pb-12 lg:w-[70%] mx-auto' src={macBookCinema} alt="" />
                </div>






                {/* <div className=''>
                    <div className="cinemasSection flex flex-col lg:flex-row  lg:items-center lg:justify-between border-b-3 ">
                        <div className="kiri lg:w-[60%]   border-r-4 mr-5">

                            <div className="flex items-center gap-3">
                                <div className="rounded-full bg-blue-600  h-7 w-7 lg:w-10 lg:h-10"></div>
                                <div className="text-2xl lg:text-4xl font-bold">Manado Trash</div>
                            </div>
                            <div className="uppercase pl-[43px] lg:pl-14 pt-2 font-bold text-gray-600">Frontend Design Manado Trash</div>
                        </div>
                        <div className="kanan mt-5 lg:mt-0">
                            project for the 2022 Manado hackathon, this is an application to help people prefer to process waste and exchange it into various attractive prizes
                        </div>

                    </div>
                    <div className='flex  justify-center mt-6 '>

                        <Link to={'/'} className='hover:text-blue-800 duration-200 text-blue-600 items-center flex gap-2'>
                            <span className='font-bold '>Read More</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                    </div>
                    <div className='mt-6 flex flex-col gap-2 lg:flex-row ' >

                        <img src={sampah1Img} className='lg:h-[500px] mx-auto' alt="sampah 1" />
                        <div className='flex mx-auto flex-col lg:flex-row'>

                            <img src={sampah2Img} className='lg:h-[500px]' alt="sampah 2" />

                        </div>
                    </div>
                </div> */}
                <div></div>
            </div>

        </div>
    )
}

export default ProjectHomeSection