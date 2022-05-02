import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'

const NavbarComp = () => {


    const [klikMenu, setKlikMenu] = useState(true)
    const klikEvent = () => {
        setKlikMenu(!klikMenu)
    }

    const dataLink = [
        { title: 'Home', link: '/' },
        { title: 'About', link: '#about' },
        { title: 'Project', link: '#project' },
        { title: 'Contact', link: '#contact' },
    ]

    return (
        <nav className='py-4 lg:py-60=  navbarComp fixed w-full bg-white'>
            <div className='containerMain flex justify-between '>

                <NavLink className={'flex gap-2 items-center'} to={'/'}>
                    <div className="bg-blue-700 h-5 w-5 flex rounded-full"></div>
                    <div className='text-xl lg:text-2xl font-bold'>Rivo Pelu</div>
                </NavLink>
                <div className={`${klikMenu ? '' : 'active'} `} onClick={klikEvent} id="navMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`bg-white navlist flex flex-col items-center lg:flex-row lg:gap-6 duration-200 ${klikMenu ? '' : 'navlist-active '}`}>
                    {
                        dataLink.map((item) => (

                            <li><NavLink className={'font-bold  duration-200'} to={item.link} >{item.title}</NavLink></li>
                        ))
                    }

                </ul>
            </div>
        </nav >
    )
}

export default NavbarComp