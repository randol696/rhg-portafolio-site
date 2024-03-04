import React from 'react';
const experiences =[
    {
    icon: 'fi fi-ss-graduation-cap',
    year: '2020 - 2022',
    place: 'The Oxford school - Panama',
    title: 'Computer Science Teacher',
    description: 'As a computer science teacher, my primary objective was to equip my students with the essential academic tools to enhance their critical thinking skills and empower them to achieve their goals. I also focused on introducing new technologies and teaching them how to leverage these tools to their advantage in their future careers. Additionally, I emphasized the importance of understanding the fundamentals of computers and how they operate, as well as guiding them in creating complex software programs using web technology.',
    tag: ''
    },
    {
    icon: 'fi fi-sr-h-square',
    year: '2010 - 2019',
    place: 'Hospital Cecilio Castillero ',
    title: 'Budget Analyst and Medical Inputs Purchase Agent',
    description: "During my tenure at the hospital, I initially took on the responsibility of managing the inventory of medical equipment for several months. Subsequently, I transitioned to overseeing the procurement of all inputs required by the hospital, ranging from medical equipment to contracts for advanced services. Later, I was tasked with managing the hospital's budget, meticulously planning and administering the financial resources to meet the institution's input demands effectively.",
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
                    <div><p className='center-text'>{experience.year}</p></div>
                    <div className="experience-info-container">
                        <div><p className='center-text'>{experience.title}</p></div>
                        <div><p className='center-text'>{experience.place}</p></div>
                        <div className='center-content'><p className="text-justify reduce-width">{experience.description}</p></div>
                        <div><p>{experience.tag}</p></div>
                    </div>
               </div>
        </div>
        );
    return(
        <>
       
        <section id="experience">
        <div className="title-place"><h2>EXPERIENCE</h2></div>
            {experiencesSection}
        </section>
        </>
    );

}

export default Experience; 