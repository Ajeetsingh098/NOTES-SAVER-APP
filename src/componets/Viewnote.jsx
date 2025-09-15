import React from 'react'

import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';

const Viewnote = () => {
  const { id } = useParams();

  const allpaste = useSelector((state) => state.Paste.Pastes)

  const note = allpaste.filter((p) => p._id === id)[0];
  // console.log("final paste",paste);

  return (
    <div>


      <div>
        <input
          type='text ' placeholder="Enter your title here" className='border-1  font-bold  rounded-md  mt-5 p-2 text-center cursor-not-allowed bg-gray-900 text-white'
          value={note.title}
          disabled
        onChange={(e) => setTile(e.target.value)}
        >
        </input>

      </div>

      <div>
        <textarea
          className='border-1 border-white-400 rounded-md p-4 mt-5  text-center w-[100%] h-[300px] cursor-not-allowed  bg-white text-black'
          value={note.content}
          disabled
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write your notes here...."
          
        >
                  

        </textarea>
<button 
                   onClick={()=>{navigator.clipboard.writeText(note?.content)
                    toast.success("Copied successfully")
                   }}
                   className='border p-1 rounded cursor-pointer bg-white text-black'>
                    Copy
                  </button>


      </div>
    </div>
  )
}

export default Viewnote
