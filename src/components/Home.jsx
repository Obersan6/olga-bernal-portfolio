/* Home Component */

import React from "react";
import profilePic from "../assets/olga-img.jpg";

function Home() {
  return (
    <section
      id="home"
      className="bg-[#EAFDFC] px-4 text-center
                   mt-[250px] sm:pt-[200px] md:mt-[100px] lg:mt-[80px]"
    >
      <img
        src={profilePic}
        alt="Olga Bernal"
        className="mx-auto rounded-full ring-2 ring-gray-300 dark:ring-gray-500
                           w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64"
      />

      <h2 className="mt-8 mb-6 text-[#3AA6B9] font-['Montserrat'] font-semibold text-[22px] sm:text-[24px] md:text-[28px] lg:text-[30px] max-w-4xl mx-auto leading-snug">
        I design structured data systems and APIs for complex knowledge domains.
      </h2>

      <p className="text-[#3AA6B9] mt-6 px-6 max-w-4xl mx-auto text-[16px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-['Comfortaa'] leading-relaxed">
        I’m a backend engineer focused on relational data models, backend
        services, and developer-friendly APIs that make specialized knowledge
        easier to explore and use — particularly in education, health, and
        mental health technologies.
        <br />
        <br />
        With a background in psychology and software engineering, I’m especially
        interested in systems that organize complex conceptual domains into
        clear, structured data architectures.
      </p>
    </section>
  );
}

export default Home;
