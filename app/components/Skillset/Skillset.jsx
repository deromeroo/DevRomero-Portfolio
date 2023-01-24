import './Skillset.scss';
import React from 'react';
import Image from 'next/image';

import ReactIcon from '../../assets/Skills/react.svg';
import Javascript from '../../assets/Skills/javascript.svg';
import Typescript from '../../assets/Skills/typescript.svg';
import Html from '../../assets/Skills/html.svg';
import CSS from '../../assets/Skills/css-alt.svg';
import NExts from '../../assets/Skills/next-js.svg';
import Github from '../../assets/Skills/github.svg';
import SASS from '../../assets/Skills/sass.svg';
import Webpack from '../../assets/Skills/webpack.svg';
import NPM from '../../assets/Skills/npm.svg';

import Atropos from 'atropos/react';

export default function Skillset() {

    const icons = [
        {
            name: 'React.js',
            image: ReactIcon
        },
        {
            name: 'Next.js',
            image: NExts
        },
        {
            name: 'Javascript',
            image: Javascript
        },
        {
            name: 'Typescript',
            image: Typescript
        },
        {
            name: 'HTML5',
            image: Html
        },
        {
            name: 'CSS3',
            image: CSS
        },
        {
            name: 'SASS',
            image: SASS
        },
        {
            name: 'Git/Github',
            image: Github
        },
        {
            name: 'Webpack',
            image: Webpack
        },
        {
            name: 'Npm',
            image: NPM
        },
    ]

    return (
        <section className='Skillset' id='skills'>

            <h2 className='Skillset-title'>Skillset</h2>

                <ul className='Skillset-container'>
                    {
                        icons.map( icon => (
                            <Atropos 
                                className='my-atropos'
                                alwaysActive= {true}
                                key={icon.name}
                            >
                                <li className='Skillset-item' >
                                    <Image  src={icon.image} alt={icon.name}/>
                                    <p>{icon.name}</p>
                                </li>   
                            </Atropos>
                        ))
                    }
                </ul>
        </section>
    )
}
