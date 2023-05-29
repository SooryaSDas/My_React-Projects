import React from 'react'

const BookList = () => {
  return (
    <div className='p-14 flex'>
        
        <div className='bg-white w-52 h-60 mx-12 shadow-2xl hover:'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcT2xAMuzNQLdQIB3H-vAmDfC6NenUxUV7Q&usqp=CAU" 
                 alt="BOOK"
                 className='w-60 h-44' />
            <h1 className='text-center font-bold'>A Little Princes</h1>
        </div>
        <div className='bg-blue-200 w-52 h-60 shadow-2xl'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpKL4qwJiPkeHHl8oHaLwrUUcAEQYykenxA&usqp=CAU" 
                alt="book"
                className='w-60 h-44' />
            <h1 className='text-center font-bold'>A Little Princes</h1>
        </div>
        <div className='bg-white w-52 h-60 mx-12 shadow-2xl'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTcT2xAMuzNQLdQIB3H-vAmDfC6NenUxUV7Q&usqp=CAU" 
                 alt="BOOK"
                 className='w-60 h-44' />
            <h1 className='text-center font-bold'>A Little Princes</h1>
        </div>
        <div className='bg-blue-200 w-52 h-60 shadow-2xl'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpKL4qwJiPkeHHl8oHaLwrUUcAEQYykenxA&usqp=CAU" 
                alt="book"
                className='w-60 h-44' />
            <h1 className='text-center font-bold'>A Little Princes</h1>
        </div>
    </div>
  )
}

export default BookList