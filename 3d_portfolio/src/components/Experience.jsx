import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {motion} from "framer-motion"
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'


const ExperienceCard = ({experience})=>{
  return(
    <VerticalTimelineElement contentStyle={{background:"#1d1836",color:"#fff"}}>
    {experience.date}
    </VerticalTimelineElement>
  )
}
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experince.</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience,index)=>{
            return(
              <ExperienceCard experience={experience} />
            )
          })}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Experience