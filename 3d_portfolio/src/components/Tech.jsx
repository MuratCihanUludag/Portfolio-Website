import React from 'react'
import {BallCanvas} from "./canvas"
import {technologies} from "../constants"
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' >
      {technologies.map((technoLogy)=>(
        <div className='w-29 h-28' key={technoLogy.name}>
          <BallCanvas icon={technoLogy.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");





