"use client"
import React from 'react'
import style from './components.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation'


function Navbar () {
 const pathname = usePathname();
console.log(pathname)

    return (
        <div className='navbar-container'>
                <div className='navbar-title'>
                    <h2><Link href='/about'>SUMONET</Link></h2>
                </div>
                <div className='navbar-menu'>
                    <ul className='navbar-menu-list'>
                        <li className = {pathname === '/about' ? 'active' :''}>
                            <Link  href='/about'>About</Link>
                        </li>
                        <li className = {pathname === '/predict' ? 'active' :''} >
                            <Link href='/predict'>Predict</Link>
                        </li>
                        <li className = {pathname === '/tutorial' ? 'active' :''}>
                            <Link  href='/tutorial'>Tutorial</Link>
                        </li> 
                    </ul>
                </div>

        </div>
    )
}

export default  Navbar;