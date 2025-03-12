import { Avatar, Typography } from '@material-tailwind/react'
import React from 'react'
import { CgAdd } from 'react-icons/cg'
import { Link, NavLink } from 'react-router-dom'

export default function SongCard({ data }) {
    const { idSong,
        imageSong,
        nameSong,
        nameArtists,
        nameAlbum } = data
    return (
        <div className=''
            data-id={idSong}
        >
            <div className='flex items-center gap-4'>
                <Avatar src={imageSong} alt={nameSong} variant='square' className='w-13 h-14' />
                <div>
                    <div className='line-clamp-1 max-w-40'>
                        <Typography variant='h6' className='text-sm '>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, corrupti! Magnam esse sint at possimus reprehenderit eius, qui provident enim nostrum veritatis saepe corrupti sequi necessitatibus distinctio consectetur dolor dolores?
                        </Typography>
                    </div>

                    <NavLink className='text-[12px] font-extralight text-gray-400' > {...nameArtists}</NavLink>
                </div>
            </div>
        </div>
    )
}
