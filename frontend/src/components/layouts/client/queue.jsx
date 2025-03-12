import { Typography } from '@material-tailwind/react'
import React from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import SongCard from '../../cards/song.card'
import { NavLink } from 'react-router-dom'
const song = {
    idSong: 1,
    imageSong: "https://docs.material-tailwind.com/img/face-2.jpg",
    nameSong: "thien li oi",
    nameArtists: "jack",
    nameAlbum: ""
}
export default function Queue(active) {
    return (
        <div className='mx-3 flex flex-col gap-12 py-3 max-h-[calc(100vh-15rem)]  overflow-y-auto custom-scrollbar'>
            {/*  header */}
            <div className=' flex flex-row justify-between'>
                <Typography variant='h6'>
                    Queue
                </Typography>

                <button className='border-none ' type='button'>
                    <IoCloseSharp size={20} className='opacity-50 hover:opacity-100' />
                </button>
            </div>

            {/* now playing */}
            <div className='gap-4 flex flex-col'>
                <Typography variant='h6'>Now playing</Typography>
                <SongCard data={song}></SongCard>
            </div>


            {/* next in queue */}
            <div className='gap-4 flex flex-col'>
                <div className='flex flex-row gap-2 '>
                    <Typography variant='h6'>Next form:</Typography>
                    <NavLink className="font-semibold hover:underline">
                        {song.nameArtists}
                    </NavLink>
                </div>
                <div className='songCard-container flex flex-col gap-4'>
                    <SongCard data={song}></SongCard>
                    <SongCard data={song}></SongCard>
                    <SongCard data={song}></SongCard>
                    <SongCard data={song}></SongCard>
                    <SongCard data={song}></SongCard>
                    <SongCard data={song}></SongCard>
                    <SongCard data={song}></SongCard>

                </div>
            </div>
        </div>


    )
}
