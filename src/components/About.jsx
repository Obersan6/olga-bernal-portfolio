/* About Component */

import React from 'react';

function About() {
    return (
        <section id="about" className="bg-[#afe3f2] pt-25 pb-40 text-center sm:mt-[5px] md:mt-[100px] lg:pt-[125px]">

            {/* <h2 className="text-[50px] font-['Montserrat'] text-[#077488] h2-xs">About Me</h2> */}
            <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-['Montserrat'] text-[#077488]">About Me</h2>

            <p className="mt-16 text-lg px-6 max-w-6xl mx-auto text-[24px] font-['Comfortaa'] text-[#27464a] leading-relaxed sm:text-[5px] md:text-[15px] lg:text-[28px] text-xs-custom">
        
            I’m a <span className="font-bold text-[#077488]">software engineer</span> with a background in psychology, working at the intersection of technology, education, and mental health. My work focuses on building structured, data-driven systems and backend architectures that support learning, research, and real-world applications.

            <br />
            <br />
            I’m currently developing <span className="font-bold text-[#077488]">PsychoDiagnose</span>, an educational platform designed to help psychology students understand and practice diagnostic reasoning through guided exploration. The project emphasizes clear data modeling, custom APIs, and backend logic designed to support complex educational workflows.

            <br />
            <br />
            In parallel, I’m building a <span className="font-bold text-[#077488]">Psychopathology Knowledge Base</span>, a structured data platform focused on organizing core psychopathology concepts and clinical descriptors for educational and professional use. This work involves content curation, database design, and API development, with a focus on clarity, structure, and long-term maintainability.
            I’m particularly interested in translating complex domains into usable software systems, with a focus on data integrity, structure, and long-term maintainability.

            </p>
            
        </section>
    );
}

export default About;


