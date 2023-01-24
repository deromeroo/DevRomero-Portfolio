'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import './Header.scss';
import Xbox from '../../assets/xbox.svg';
import Overwatch from '../../assets/overwatch.svg';
import Fut from '../../assets/fut.svg';
import ReactLogo from '../../assets/react.svg';
import Navbar from '../Navigation/Navbar/Navbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

export default function Header ({showSidebar,setShowSidebar}) {

    const logos = [Xbox, Overwatch, Fut, ReactLogo];

    return (
        <>
            <div className='header-container' id='top'>
                <div className='header-logo'>

                    <div className='logo'>
                        <Link href='/' className='logo'>
                            <Image src={logos[3]} alt='Logos'/>     
                        </Link>

                        <p data-text='Dev Romero' className='logo-name'>Dev Romero</p>
                    </div>

                    <div className='social'>
                        <Link href={'https://github.com/deromeroo'} target='__blank'>
                            <i className="bi bi-github"></i>
                        </Link>
                        <Link href={'https://twitter.com/DevRomeroo'}  target='__blank'>
                            <i className="bi bi-twitter"></i>
                        </Link>
                    </div>
                </div>

                <div className='burger' onClick={ ()=> setShowSidebar(!showSidebar) }>
                    <div className={`${showSidebar ? 'change1' : ''} bar1`}></div>
                    <div className={`${showSidebar ? 'change2' : ''} bar2`}></div>
                    <div className={`${showSidebar ? 'change3' : ''} bar3`}></div>
                </div>

                <Navbar />
            </div>

            {
                showSidebar && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            }
        </>
    )
}