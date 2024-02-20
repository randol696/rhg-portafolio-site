import React from 'react';
import capture1 from '../../Assets/Images/capture1.png'
import capture2 from '../../Assets/Images/capture2.png'

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
    image: capture2,
    altText:'',
    title: 'Americas Faith',
    description: '',
    link: 'https://amfaith.org/',
    tag:['html','css','Wordpress','php'],
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
        <div className="title-place"><h2>PROJECTS</h2></div>
            <div>{projectSection}</div>
        </section>
        </>
    );

}

export default Projects; 