import Atropos from "atropos/react";
import Image from "next/image";
import React from "react";
import "./Projects.scss";

import Yard from '../../assets/captures/yard-screen.png';
import TodoApp from '../../assets/captures/TodoApp.png';
import GithubUser from '../../assets/captures/github-user.png';
import PlatziConf from '../../assets/captures/platziConf.png'
import Link from "next/link";

export default function Projects() {

  const ProjectsArray = [
    {
      name: 'Platzi Conf Merch',
      image: PlatziConf,
      url: 'https://deromeroo.github.io/Platzi-Conf-Merch/',
      description: 'Ecommerce website for the sale of products from the Platzi Conf. Created using React.js, implementing Paypal as a payment method, and Geolocation (Leaflet / Geoapify).'
    },
    {
      name: 'Github User Search',
      image: GithubUser,
      url: 'https://deromeroo.github.io/Github-User-Search/',
      description: 'Web app to search for Github users, obtaining information about them, such as how many repositories and followers they have and more. Developed using React.js, Material UI and Github API'
    },
    {
      name: 'Todo App',
      image: TodoApp,
      url: 'https://deromeroo.github.io/TodoApp/',
      description: 'Todo Web Application to take note of the tasks you have to do, you can mark it as complete and delete them. Create using React.js and implementing localstorage.'
    },
    {
      name: 'Yard Shop',
      image: Yard,
      url: 'https://deromeroo.github.io/Yard-Shop/',
      description: 'Web page design with functional cart and more. Developed using React.js and consuming an API for the products'
    },
  ];


  return (
    <section className="Projects" id="projects">
      <h3 className="Projects-title">Projects</h3>

      <div className="Projects-container">

        {
          ProjectsArray.map( project => (

              <div className="Projects-item">

                <Link href={project.url} target='__blank'>
                  <Image src={project.image}/>
                </Link>

                <div className="Projects-item--title">
                  <h4>{project.name}</h4>
                  <Link href={project.url} target='__blank'>
                    <i class="bi bi-box-arrow-up-right"></i>
                  </Link>
                </div>
                <p>{project.description}</p>
              </div>

          ))
        }

        
      </div>

    </section>
  );
}
