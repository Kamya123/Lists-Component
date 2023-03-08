import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './navBar.css';
import { links, logInLi } from '../../data'



const NavBar = () => {
    return (
        <nav>
            <div className="nav_container">

                {/* Since, we are using React Dom, we will use Link for the link and NavLink for the Nav linking, which is gong to some special styling in our page */}

                <ul className='nav_links'>
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li key={index} className='text-sm font-bold tracking-wider'>
                                    <NavLink to={path} > {name} </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
