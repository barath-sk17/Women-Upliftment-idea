


import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion"

import { styles } from '../styles';
import { services } from '../constants';

import { fadeIn,textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (


  <Tilt className='xs:w-[250px] w-full'>
    
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[18px] max-w-3xl leading[30px]'>
        Uplifting women in society is an important and ongoing process that involves promoting gender equality, empowering women, 
        and creating an environment where women can thrive and reach their full potential. 
        <br/><br/> <span className='text-[#915eff]'>" Main moto : Safety and Security for Women "</span><br/><br/>
        Create safe and supportive environments for women by addressing violence against women, 
        harassment, and discrimination. Implement laws and policies that protect women's rights and provide support systems for survivors.
      </motion.p>

      <br/>
      <br/>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <div className='mt-8 flex flex-wrap gap-10'>
        
        {services.map((service, index) => (
          
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about");