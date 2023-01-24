import React from 'react';
import './Navbar.scss';

export default function Navbar() {
    return (
        <ul className='header-nav'>
            <li className='header-nav--item'>
                <a href={'#about'}>
                    About
                </a>
            </li>
            <li className='header-nav--item'>
                <a href={'#skills'}>
                    Skillset
                </a>
            </li>
            <li className='header-nav--item'>
                <a href='#projects'>
                    Projects
                </a>
            </li>
            <li className='header-nav--item'>
                <a href='#contact'>
                    Contact
                </a>
            </li>
        </ul>
    )
}