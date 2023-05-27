import React from 'react'

const Header = () => {

  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='flex col-span-2'>
        <img className="h-9 my-2 cursor-pointer"
            alt="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
        />
          <img className='h-16 mx-2' 
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmepU5WPwWvfd5PKxf9rCLA_nHvSwEFGfPIQ&usqp=CAUa" 
               alt="logo" />
        </div>
        <div className='col-span-6 text-center'>
        <h2 className='font-bold text-red-950 text-3xl p-4'>PRATHIBHA LIBRARY & PRATHIBHA SARGAVEDHI</h2>
        </div>
        <div>
          
        </div>
        <div className='col-span-2'>
            <img className='h-11' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
                 alt="admin logo" />
        </div>
    </div>
  )
}

export default Header