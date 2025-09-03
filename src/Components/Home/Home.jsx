import React from 'react'
import avtarPic from "../../assets/shalini.png"


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between p-10 md:p-20 items-center ml-8'>
        <div className=' md:w-2/4 md: pt-10 text-left'>
        <h1  className='text-3xl md:text-6xl font-bold  flex leading normal -tracking-tighter
          transition-all hover:translate-x-2 ease-in-out hover:scale-125 hover:text-amber-100
          hover:shadow -lg duration-200 font-serif
        '>
            Hello🖐I'm Shalini 👩‍🎓
            </h1>
            <p className='text -sm md:text-xl -tracking-tight pt-5 font-serif
            transition-all hover:translate-x-2 ease-in-out hover:scale-110 duration-200
             '>
                Hi, I'm MERN stack — a passionate MERN Stack Developer.

          I specialize in building full-stack web applications using MongoDB, Express.js, React.js,    
           and Node.js. My focus is on creating responsive, user-friendly, 
            and scalable solutions that solve real-world problems.
        
    
            </p>
            <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:py-2
             md;px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded -3xl bg-[#465697]'> Contact me</button>
         </div>
         <div className='flex items-center justify-end mr-30'>
            <img  className='w-2/5 rounded-2xl transition-all duration-300 hover:brightness-90
            active:brightness-75 hover:scale-125 active:scale-100 border-2
             border-transparent  hover:border-blue-500 hover:border -4'
            src={ avtarPic}alt="shalini" />
         </div>
    </div>
  )
}

export default Home