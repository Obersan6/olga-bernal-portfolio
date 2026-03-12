/* Projects Component */

import React from "react";
import ProjectCard from "./ProjectCard";
import psychodiagnoseImg from "../assets/PsychoDiagnose-About.png";
import psychodiagnoseErd from "../assets/psycho_diagnose_erd.png";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#afe3f2] pt-10 pb-10 sm:pt-14 md:pt-16 lg:pt-20 text-center"
    >
      <h2 className="text-2xl sm:text-3xl md:text-[50px] font-['Montserrat'] text-[#077488] mb-8 sm:mb-10 md:mb-14">
        Featured Project
      </h2>

      {/* Main Projects */}
      <div className="space-y-16 mb-20">
        <div className="flex flex-col items-center mt-0 mb-14">
          <p className="project-feature-label text-sm uppercase text-[#077488] mb-4">
            Flagship Backend Project
          </p>
          <ProjectCard
            title="PsychoDiagnose — Backend System for Psychopathology Education"
            description={
              <>
                <span className="italic">
                  Relational modeling of the DSM-5-TR diagnostic framework
                </span>
                <br />
                <br />
                A backend educational application that models the diagnostic
                structure of the DSM-5-TR using a relational PostgreSQL database
                and a Flask REST API.
                <br />
                <br />
                The system organizes disorders, diagnostic criteria, signs,
                symptoms, differential diagnoses, and related educational
                content into a structured relational model designed for
                exploration of psychopathological semiology.
                <br />
                <br />
                It was built to support clear domain modeling, maintainable
                backend logic, and API-driven access to interconnected clinical
                and educational data.
              </>
            }
            generalFeatures={
              <>
                Includes relational schema design, a Flask REST API architecture
                with 30+ endpoints, structured educational content delivery,
                search/autocomplete support, and backend logic designed to guide
                diagnostic reasoning workflows without performing diagnosis.
              </>
            }
            techStack={["Python", "Flask", "PostgreSQL", "SQLAlchemy"]}
            githubLink="https://github.com/Obersan6/PsychoDiagnose"
            note="🔔 App may take a moment to load (free hosting)."
            erdLink="https://github.com/Obersan6/PsychoDiagnose/tree/main?tab=readme-ov-file#entity-relationship-diagram-erd"
            docsLink="https://github.com/Obersan6/PsychoDiagnose/tree/main?tab=readme-ov-file#psychodiagnose--a-relational-backend-engine-for-psychopathology-education"
            liveLink="https://capstone-1-deployment.onrender.com/"
            image={psychodiagnoseImg}
            erdImage={psychodiagnoseErd}
            isFeatured={true}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
