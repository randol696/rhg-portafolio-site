import React from 'react';
const experiences =[
    {
    icon: 'fi fi-ss-graduation-cap',
    year: '2020 - 2022',
    place: 'The Oxford school - Panama',
    title: 'Computer Science Teacher',
    description: '',
    tag: ''
    },
    {
    icon: 'fi fi-sr-h-square',
    year: '2010 - 2019',
    place: 'Hospital Cecilio Castillero ',
    title: 'Budget Analyst and Medical Inputs Purchase Agent',
    description: '',
    tag: ''
    }
];

function Experience(){
    const experiencesSection = experiences.map(experience => 
            <div className='experience-container' key={experience.id}>
                <div className="experience-card">
                    <div className="experience-icon">
                        <p><i className={experience.icon}></i></p>
                        </div>
                    <div><p>{experience.year}</p></div>
                    <div className="experience-info-container">
                        <div><p>{experience.title}</p></div>
                        <div><p>{experience.place}</p></div>
                        <div><p>{experience.description}</p></div>
                        <div><p>{experience.tag}</p></div>
                    </div>
               </div>
        </div>
        );
    return(
        <>
       
        <section id="experience">
            <h2>EXPERIENCE</h2>
            {experiencesSection}
        </section>
        </>
    );

}

export default Experience; 