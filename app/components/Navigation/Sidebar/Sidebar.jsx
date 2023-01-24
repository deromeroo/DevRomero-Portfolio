import Link from 'next/link';
import React from 'react';
import './Siderbar.scss';

export default function Sidebar({showSidebar,setShowSidebar}) {

    return (
        <aside className='Sidebar'>
            <div className='Sidebar-container'>

                <div className='burger' onClick={ ()=> setShowSidebar(!showSidebar) }>
                    <div className={`${showSidebar ? 'change1' : ''} bar1`}></div>
                    <div className={`${showSidebar ? 'change2' : ''} bar2`}></div>
                    <div className={`${showSidebar ? 'change3' : ''} bar3`}></div>
                </div>

                <ul className='Sidebar-nav'>
                    <li className='Sidebar-nav--item'>
                        <a href='#about' onClick={ () => setShowSidebar(false)}>
                            About
                        </a>
                    </li>
                    <li className='Sidebar-nav--item'>
                        <a href='#skills' onClick={ () => setShowSidebar(false)}>
                            Skillset
                        </a>
                    </li>
                    <li className='Sidebar-nav--item'>
                        <a href='#projects' onClick={ () => setShowSidebar(false)}>
                            Projects
                        </a>
                    </li>
                    <li className='Sidebar-nav--item'>
                        <a href='#contact' onClick={ () => setShowSidebar(false)}>
                            Contact
                        </a>
                    </li>
                </ul>

                <div className='resume'>
                    <p>Resume</p>

                    <Link href='https://drive.google.com/file/d/1o3ZKHZfTGaMXyAvVXHCYrEg8A1LgeHLF/view?usp=share_link' target='__blank'>
                        <button type='button' className='cv-button'>
                            <i className="bi bi-eye-fill"></i>
                        </button>
                    </Link>

                </div>
            </div>
            
        </aside>

    )
}

