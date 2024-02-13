import React from 'react';
import capture1 from '../../Assets/Images/capture1.jpg'

const projects =[
    {
    image: capture1,
    altText:'screenshot capture',
    title: 'DecorcenterRMV',
    description: 'website with using html css javascript',
    link: 'https://www.decorcenterrmv.com/',
    tag:['html','css','Javascript'],
    },
    {
    image: capture1,
    altText:'',
    title: 'Computer Science Teacher',
    description: '',
    link: '',
    tag:['html','css'],
    }
];


function Projects(){
    const projectSection = projects.map((project, index) => (
        <div className='project-container' key={index}>
            <div className="image-container">
                <div><img src={project.image} alt={project.altText}/></div>
            </div>
            <div className="project-info">
                <div><p>{project.title}</p></div>
                <div><p>{project.description}</p></div>
                <div><a href={project.link}><i class="fi fi-br-link"></i></a></div>
                <div className="tag">
                    {project.tag.map((tag, tagIndex) => (
                        <div class="tag-container" key={tagIndex}><p>{tag}</p></div>
                    ))}
                   
                </div>
            </div>
        </div>
      ));
    return(
        <>
        <section id="projects">
            <div>{projectSection}</div>
        </section>
        </>
    );

}

export default Projects; 