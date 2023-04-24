import React,{useEffect,useState } from 'react'
import {NavLink} from "react-router-dom"
import {styles} from "../styles"
import { navLinks} from "../constants"
import { logo } from '../assets'
import { menu,close } from '../assets'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto' >
        <NavLink to="/" className="flex items-center gap-2" onClick={()=>window.scrollTo(0,0)} >
          <img src={logo} alt="logo" className='w-p h-9 object-contain'  />
          <p className=' text-[18px] font-bold cursor-pointer ' >Murat Cihan <span className='sm:inline-block hidden' >| JsMaster </span></p>
        </NavLink>
        <ul className='list-none hidden sm:flex flex-row gap-10' >
          {navLinks.map((link)=>{
            return(
            <NavLink className="text-[18px] font-medium cursor-pointer"  key={link.id} to={`/${link.id}`}> {link.title}  </NavLink>
            )
          })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close :menu} alt="menu" className='w-[28px] h-[29px] object-contain cursor-pointer'
          onClick={()=> setToggle(!toggle)}/>
          <div className={`${toggle ? "flex":"hidden"} p-6 black-gradient absolute top-20 right-0 mx-4 my-5 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4 ' >
            {navLinks.map((link)=>{
              return(
              <NavLink className="text-[18px] font-medium cursor-pointer"  key={link.id} to={`/${link.id}`}> {link.title}  </NavLink>
              )
            })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar