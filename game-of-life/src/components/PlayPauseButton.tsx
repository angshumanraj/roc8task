import React from 'react'
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs'
import { twMerge } from 'tailwind-merge'

function PlayPauseButton({onClick,isPlaying}:{onClick:()=>void,isPlaying:boolean}) {
  return (
    <button
        className={twMerge("transition ease-in flex items-center justify-center h-8 w-8 rounded-full shadow-md",
            isPlaying? "bg-gray-700 hover:bg-slate-800":"bg-green-500 hover:bg-green-900"
        )}
        onClick={onClick}    
    >
        {isPlaying?(
            <BsFillPauseFill className='h-6 w-6'/>
        ):(
            <BsFillPlayFill className='h-6 w-6'/>
        )}
        </button>
  )
}

export default PlayPauseButton