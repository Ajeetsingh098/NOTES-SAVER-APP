import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { addtopaste, updatetopaste } from '../redux/Pasteslice';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const [title, setTile] = useState("");
    const [value, setValue] = useState("");
    const [searchparams, setparams] = useSearchParams("");
    const PastedId = searchparams.get("pasteId");
    const dispatch = useDispatch();
    const allpaste = useSelector((state) => state.Paste.Pastes)

    useEffect(() => {
        if (PastedId) {
            const paste = allpaste.find((p) => p._id === PastedId)
            setTile(paste.title)
            setValue(paste.content)
        }
    }, [PastedId])

    function Createyournotes() {
        const Paste = {
            title: title,
            content: value,
            _id: PastedId || Date.now().toString(25),
            createdAt: new Date().toLocaleString()
        }
        if (PastedId) {
            dispatch(updatetopaste(Paste));
        }
        if (!title.trim() || !value.trim()) {
            alert("Title and Content cannot be empty!");
            return;
        }
        else {
            dispatch(addtopaste(Paste));
        }

        //after creation and updation
        setTile("");
        setValue("");
        setparams({});

    }

    return (
        <div className='flex flex-col '>


            <div className=' '>
                <input
                    type='text ' placeholder="Enter your title here" className='border-2  rounded-md  p-2.5  text-center bg-white text-black'
                    value={title}
                    onChange={(e) => setTile(e.target.value)}
                >
                </input>
                <button

                    onClick={Createyournotes}
                    className='border-2 border-gray-400 rounded-md  m-5  text-center p-2 bg-blue-400 text-white font-bold cursor-pointer'>
                    {
                        PastedId ? "Update your notes" : "Create new notes"

                    }
                </button>
            </div>

            <div>
                <textarea
                    className='border-2 border-gray-400 rounded-md p-5 text-center min-w-[100%] h-[300px]  bg-white text-black'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Write your notes here...."
                >
                </textarea>

            </div>
        </div>

    )
}

export default Home
