import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Me from '../../assets/Me.jpeg';
import Obito from '../../assets/obito.gif';
import './About.scss';

export default function About() {
    return (
        <section className='About' id='about'>


            <div className='About-container'>

                <h1 className='About-title'>Frontend Developer</h1>
                {/* <div className='About-me'>
                    <div className='flip'>
                        <Image src={Me} alt='Photo of me'/>
                        <div className='flip-text'>
                            <Image src={Obito} alt='Photo of me'/>
                        </div>
                    </div>
                </div> */}

                <div className='About-info'>
                    <p> Hi, I'm Diego Romero  </p>
                    <h3> Glad to see you here ! </h3>
                    <p className='About-resume'> I'm looking for my first work experience. I really enjoy learning new things, I love programming with React, playing video games and sports.</p>
                    
                    <Link href='https://drive.google.com/file/d/1o3ZKHZfTGaMXyAvVXHCYrEg8A1LgeHLF/view?usp=share_link' target='__blank'>
                        <button className='About-button'>
                            See resume
                            <i className="bi bi-eye-fill"></i>
                        </button>
                    </Link>
                </div>
            </div>


        </section>
    )
}