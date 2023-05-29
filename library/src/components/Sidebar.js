import React from 'react'
import { useSelector } from 'react-redux'
import stores from '../utils/stores'

const Sidebar = () => {

  const isMenuOpen = useSelector(stores=>stores.app.isMenuOpen);
  if(!isMenuOpen) return null;

  return (
    <div className='w-64 shadow-xl h-[600px] overflow-y-scroll scroll-p-0 '>
        <ul className='font-medium p-5'>
            <li className='pt-10 pl-12'>Home</li>
            <li className='pt-10 pl-12'>About</li>
            <li className='pt-10 pl-12'>Books</li>
            <li className='pt-10 pl-12'>Sargavedhi</li>
            <li className='pt-10 pl-12'>Sargavedhi Programs</li>
            <li className='pt-10 pl-12'>Team Members</li>
            <li className='pt-10 pl-12'>Gallery</li>
            <li className='pt-10 pl-12'>Contact</li>


            {/* <li className='pt-10 pl-12'>Books</li>
            <li className='pt-10 pl-12'>Sargavedhi</li>
            <li className='pt-10 pl-12'>Sargavedhi Programs</li>
            <li className='pt-10 pl-12'>Team Members</li>
            <li className='pt-10 pl-12'>Contact</li> <li className='pt-10 pl-12'>Books</li>
            <li className='pt-10 pl-12'>Sargavedhi</li>
            <li className='pt-10 pl-12'>Sargavedhi Programs</li>
            <li className='pt-10 pl-12'>Team Members</li>
            <li className='pt-10 pl-12'>Contact</li> <li className='pt-10 pl-12'>Books</li>
            <li className='pt-10 pl-12'>Sargavedhi</li>
            <li className='pt-10 pl-12'>Sargavedhi Programs</li>
            <li className='pt-10 pl-12'>Team Members</li>
            <li className='pt-10 pl-12'>Contact</li> */}

        </ul>
    </div>
  )
}

export default Sidebar