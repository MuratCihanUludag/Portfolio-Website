import React,{useRef,useState} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
const Contact = () => {
  const formRef = useRef()
  const [loading,setLoading]= useState(false)
  const handleSubmit = (e) => {
    let formData = Object.fromEntries(new FormData(formRef.current).entries());

  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left","tween",0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl' >
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact. </h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'  type="text" name='name' placeholder="what's your name?"/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'  type="email" name='email' placeholder="what's your email?"/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Massage</span>
            <textarea className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' rows="7" name='message' placeholder="what do you want to say?"/>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8  outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl' >
            {loading ? "Sending...":"Send"}
          </button>
        </form>
      </motion.div>
      <motion.div ariants={slideIn("right","tween",0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"")