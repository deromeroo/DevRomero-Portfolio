import Link from 'next/link';
import React from 'react';
import './Footer.scss';

export default function Footer() {

    const year = new Date();


  return (
    <div className='Footer'>
        <p>Developed by 
            <Link href={'https://www.linkedin.com/in/deromeroo/'}>
                @Deromeroo
            </Link>
        </p>

        <span>| © {year.getFullYear()}  |</span>

        <p>All rights reserved</p>
    </div>
  )
}