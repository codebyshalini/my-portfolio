
import React from "react";
import shalini from "../../assets/shalini.png"
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={shalini} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  :

      💻 I’m a passionate Frontend Developer skilled in building modern, responsive, 
          and user-friendly web applications. 
          I have strong expertise in HTML, CSS, JavaScript, 
         React.js, Next.js, and Tailwind CSS, enabling me to create clean designs with
       efficient functionality. I enjoy transforming ideas into interactive digital 
         experiences while keeping performance and usability at the core.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 🗄️ I have hands-on experience with MySQL and MongoDB,
                  which allows me to work with both relational and non-relational databases. 
                  I can design efficient database schemas, write optimized queries, 
                  and manage data effectively to support scalable and secure applications.
                   My ability to handle structured as well as unstructured data helps me
                    build full-stack projects with strong and reliable backends.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 ⚡ I am skilled in building and handling APIs using Node.js and Express.js, 
                 ensuring secure, efficient, and scalable backend systems.
                  I can design RESTful APIs, manage server-side logic, 
                  and integrate databases seamlessly to deliver smooth communication between
                   frontend and backend. With my expertise, I focus on creating reliable server
                    architectures that power modern web applications.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
