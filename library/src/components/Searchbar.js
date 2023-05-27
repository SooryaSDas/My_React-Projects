import React, { useState } from 'react'

const Searchbar = () => {
    const [search, setSearch] = useState('');
  return (
    <div className='flex content-center'>
        <input className='px-5 w-1/2 border border-gray-400 p-2 rounded-l-full' 
                    onChange={(e)=>setSearch(e.target.value)}
                    type="text" 
                    value={search} />
                   { console.log(search)}
        <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'> 🔍</button> 
    </div>
  )
}

export default Searchbar