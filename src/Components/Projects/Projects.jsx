
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="job portal (MERN)"
          main="Developed a Job Portal using the MERN stack (MongoDB, Express.js, React.js, Node.js) with features like authentication, job postings, and application management. "
        />
        <ProjectCard
          title="reusume builder(MERN)"
          main="Built a Resume Builder application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with features like dynamic resume templates, form-based input, and real-time preview"
        />
        <ProjectCard
          title="AI mock interview platform"
          main="Developed an AI-powered Mock Interview Platform using Next.js, React, n8n, Clerk, Akole, and Arcjet, enabling users to practice interviews with secure authentication, workflow automation, and intelligent feedback "
        />
      </div>
    </div>
  );
};

export default Projects;
