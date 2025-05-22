import React, { useState } from "react";
import CestApp_Logo from "../images/CestApp_Logo.png";
import { Link } from "react-router-dom"

//icones
// instalar o pacote com: npm install react-icons

import { MdMenuOpen, MdOutlineSearch } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";



const menuItems = [
  {
    icons: <IoHomeOutline size={30} />,
    label: "Home",
    to: "/home"
  },
  {
    icons: <MdOutlineSearch size={30} />,
    label: "Search",
    to: "/home/inscritos"
  },
  {
    icons: <CiSettings size={30} />,
    label: "Settings",
    to: "/home/settings"
  },
]



export default function Sidebar() {

  const [open, setOpen] = useState(true)

  return (
    <nav className={`shadow-md p-2 flex flex-col duration-500 bg-blue-300 text-white ${open ? 'w-60' : 'w-16'}`}>

      {/* Header */}
      <div className=' px-3 py-2 h-20 flex justify-between items-center'>
        <img src={CestApp_Logo} alt="Logo" className={`${open ? 'w-10' : 'w-0'} rounded-md`} />
        <div><MdMenuOpen size={34} className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`} onClick={() => setOpen(!open)} /></div>
      </div>

      {/* Body */}

      <ul className='flex-1'>
        {
          menuItems.map((item, index) => {
            return (
              <li key={index} className='px-3 py-3 my-3 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group'>
                <div><Link to={item.to}>{item.icons}</Link></div>
                <p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden text-white`}>
                  <Link to={item.to}>{item.label}</Link>
                </p>
                <p className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md w-0 p-0 text-white bg-blue-800 duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}>
                  <Link to={item.to}>{item.label}</Link>
                </p>
              </li>
            )
          })
        }
      </ul>
      {/* footer */}
      <div className='flex items-center gap-2 px-3 py-2'>
        <div><FaUserCircle size={30} /></div>
        <div className={`leading-5 ${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
          <p>ADMIN</p>
          <span className='text-xs'>admin@cestapp.com</span>

        </div>
      </div>


    </nav>
  )
}

