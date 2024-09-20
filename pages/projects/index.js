import Head from "next/head";
import ProjectsSlider from "../../components/ProjectsSlider";

import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Head>
        <title>Projects | Portfolio</title>
        <link rel="icon" href="https://img.icons8.com/?size=100&id=19302&format=png&color=1A1A1A" />
      </Head>
      <Circles />
      <div className='container mx-auto mt-14 '>
        <div className='flex flex-col xl:flex-row gap-x-8 '>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'
            >
              My Personal Projects
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0 max-sm:hidden'
            >
              This portfolio highlights a selection of my most notable projects, demonstrating my capabilities in web development. From concept to delivery, I strive for innovative solutions and exceptional results.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <ProjectsSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Projects;
