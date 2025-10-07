import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletepaste } from '../redux/Pasteslice'
import toast from 'react-hot-toast'

const Notes = () => {
  const paste = useSelector((state) => state.Paste.Pastes)
  console.log(paste);
  const [searchterm, setsearchterm] = useState('');
  const dispatch = useDispatch();

  const filterdata = paste.filter((paste) => paste.title.toLowerCase().includes(searchterm.toLowerCase()));
  function handeldelete(pasteId) {
    dispatch(deletepaste(pasteId));

  }




  const handleshare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Notes App',
          text: 'Check out this cool note I made!',
          url: window.location.href, 
        });
        console.log("Shared successfully");
      } catch (error) {
        console.log("Share failed:", error);
      }
    } else {
      alert("Your browser does not support sharing.");
    }
  }


  return (
    <div className='text-white p-2' >
      <input
        className='p-2 mt-5 border-1 rounded-xl min-w-[90%] ml-5 bg-white text-black'
        type='search'
        placeholder='Search here'
        value={searchterm}
        onChange={(e) => setsearchterm(e.target.value)}
      >
      </input>

      <div className='flex flex-col  gap-2 min-w-[80%]   '>

        {

          filterdata.length > 0 &&
          filterdata.map((paste) => {
            return (
              <div
                key={paste?._id}
                className='flex flex-col gap-5 border mt-5 text-center p-5 rounded-xl  bg-gray-700 '>

                <div className='font-bold '>
                  {paste.title}
                </div>
                <div className='border p-2 bg-white text-black'>
                  {paste.content}
                </div>
                <div className='flex flex-row  gap-2 mt-5 place-content-evenly '>
                  <button
                    className='border p-1 rounded cursor-pointer'>
                    <a href={`/?pasteId=${paste?._id}`}
                    >
                      Edit
                    </a>

                  </button>
                  <button
                    className='border p-1 rounded cursor-pointer' >
                    <a href={`/paste/${paste?._id}`}>
                      View
                    </a>

                  </button>
                  <button
                    className='border  rounded cursor-pointer '
                    onClick={() => handeldelete(paste?._id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Copied successfully")
                    }}
                    className='border  rounded cursor-pointer '>
                    Copy
                  </button>
                  <button
                    onClick={handleshare}
                    className='border  rounded cursor-pointer'>
                    Share
                  </button>
                </div>

                <div>
                  {paste.createdAt}
                </div>


              </div>
            )
          })


        }

      </div>


    </div>
  )
}

export default Notes
