/* About Component */

import React from "react";

function About() {
  return (
    <section
      id="about"
      className="bg-[#afe3f2] pt-25 pb-40 text-center sm:mt-[5px] md:mt-[100px] lg:pt-[125px]"
    >
      {/* <h2 className="text-[50px] font-['Montserrat'] text-[#077488] h2-xs">About Me</h2> */}
      <h2 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] font-['Montserrat'] text-[#077488]">
        About
      </h2>

      <p className="mt-16 text-lg px-6 max-w-6xl mx-auto text-[24px] font-['Comfortaa'] text-[#27464a] leading-relaxed sm:text-[5px] md:text-[15px] lg:text-[28px] text-xs-custom">
        I’m a <span className="font-bold text-[#077488]">backend engineer</span>{" "}
        with a background in psychology, focused on building backend systems and
        structured data platforms for education and health-related domains. My
        work centers on translating complex knowledge domains into well-designed
        software architectures that support learning, research, and
        decision-making.
        <br />
        <br />
        My flagship project,{" "}
        <span className="font-bold text-[#077488]">PsychoDiagnose</span>, is a
        backend educational system that models the structure of psychopathology
        knowledge using a relational PostgreSQL database and a Flask API. The
        application exposes more than 30 endpoints and provides structured
        access to diagnostic concepts, clinical descriptors, and educational
        workflows designed to support reasoning and exploration.
        <br />
        <br />
        In parallel, I’m developing a broader{" "}
        <span className="font-bold text-[#077488]">
          psychopathology knowledge infrastructure
        </span>{" "}
        focused on organizing core concepts, clinical signs, and functional
        domains into a scalable data architecture. This work emphasizes clear
        data modeling, API design, and long-term maintainability, with the goal
        of enabling educational tools, research applications, and future
        intelligent systems built on structured clinical knowledge.
      </p>
    </section>
  );
}

export default About;
