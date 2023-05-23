import { motion } from 'framer-motion';


import { quote } from '../assets';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
import Feedbacks from './Feedbacks';

const Hero = () => {



  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h:40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Be <span className='text-[#915eff]'>Fearless</span></h1><br/>
          <img src={quote} alt='quote' className='w-14 h-13 object-contain' />
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>&nbsp;&nbsp;We can change the world and make it a better place.<br className='sm:block hidden'/> &nbsp;&nbsp;It is in our hands to make a difference.</p>
          
          <br/>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}><span className='font-poppins  text-[#915eff]'>&nbsp;&nbsp;- Nelson Mandela</span></p>
          <br/>
          <br/>
          <br/>
          <button class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[28px]"
          onClick={(e) => {
            e.preventDefault();
            window.location.href="http://127.0.0.1:8000/complaint/";
          }}>
            Anonymous Complaint
          </button>
          <br/>
        <br/>
        <button class="bg-violet-500 hover:bg-violet-400 text-white font-bold py-2 px-4 border-b-4 border-violet-700 hover:border-violet-500 rounded text-[28px]"
          onClick={(e) => {
            e.preventDefault();
            window.location.href="http://127.0.0.1:8000/mail/";
          }}>
            Send to Authorised Person 
          </button>
        </div>
        
      </div>
      
      <br/>
      <br/>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 '>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero