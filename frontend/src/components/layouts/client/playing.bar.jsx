import React from 'react'
import Footer from './footer'
import SongCard from '../../cards/song.card'
import { Alert, Button, Tooltip, Typography } from '@material-tailwind/react'
import { FaArrowRightArrowLeft, FaBackwardStep, FaForwardStep, FaRotate } from 'react-icons/fa6'
import { FaBackward, FaPlay } from 'react-icons/fa'
import { MdAirplay, MdOutlineCloseFullscreen, MdOutlineSmartDisplay } from 'react-icons/md'
import { VscMute } from 'react-icons/vsc'
import { HiOutlineQueueList } from 'react-icons/hi2'
import { CgAdd } from 'react-icons/cg'

export default function PlayingBar() {
    const song = {
        idSong: 1,
        imageSong: "https://docs.material-tailwind.com/img/face-2.jpg",
        nameSong: "thien li oi",
        nameArtists: ["jack"],
        nameAlbum: ""
    }
    return (
        <footer >
            <div className='md:px-2 lg:px-6 flex justify-between flex-row items-center'>
                <div className='flex items-center gap-5 px-2 m-1'>
                    <SongCard
                        data={song}
                    />
                    <div data-id={song.idSong} className='ms-1'>
                        <CgAdd size={20} />
                    </div>
                </div>

                <div className="playingAction flex flex-col  flex-1 justify-center items-center">
                    <div className=' flex flex-1 gap-8 justify-center'>
                        <div className='flex gap-5 items-center'>
                            {/* enable suffle button */}
                            <Tooltip content="Enable shuffle">
                                <FaArrowRightArrowLeft
                                    size={20}
                                    cursor={"pointer"}
                                />
                            </Tooltip>
                            <Tooltip content="Previous">
                                <FaBackwardStep
                                    size={20}
                                    cursor={"pointer"}
                                />
                            </Tooltip>
                        </div>

                        <Button className='bg-white rounded-full p-3 items-center'>
                            <FaPlay color='black' size={15} />
                        </Button>
                        <div className='flex gap-5 items-center'>
                            <Tooltip content="Next">
                                <FaForwardStep
                                    size={20}
                                    cursor={"pointer"}
                                />
                            </Tooltip>
                            <Tooltip content="Enable repeat">
                                <FaRotate
                                    size={20}
                                    cursor={"pointer"}
                                />
                            </Tooltip>

                        </div>
                    </div>
                    <div className='w-1/2 flex items-center gap-2'>
                        <span>0:00</span>
                        <div
                            class="flex-start flex h-1 w-full overflow-hidden rounded-full bg-gray-400 font-sans text-xs font-medium">
                            <div
                                class="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                            </div>
                        </div>
                        <span className='flex-shrink-0'>3:40</span>
                    </div>

                </div>
                <div className='flex gap-4  '>
                    <Tooltip content="Now playing view">
                        <MdOutlineSmartDisplay
                            size={20}
                            cursor={"pointer"}
                        />
                    </Tooltip>

                    <Tooltip content="Queue">
                        <HiOutlineQueueList
                            size={20}
                            cursor={"pointer"}
                        />
                    </Tooltip>


                    <div className='flex w-24'>

                        <Tooltip content="Mute">
                            <VscMute
                                size={20}
                                cursor={"pointer"}
                            />
                        </Tooltip>

                        <div className='w-full flex items-center'>

                            <div
                                class="flex-start flex h-1 w-full overflow-hidden rounded-full bg-gray-400 font-sans text-xs font-medium">
                                <div
                                    class="flex items-center justify-center w-1/2 h-full overflow-hidden text-white break-all bg-gray-900 rounded-full">
                                </div>
                            </div>

                        </div>
                    </div>

                    <Tooltip content="Mini player">
                        <MdAirplay
                            size={20}
                            cursor={"pointer"}
                        />
                    </Tooltip>

                    <Tooltip content="Full screen">
                        <MdOutlineCloseFullscreen
                            size={20}
                            cursor={"pointer"}
                        />
                    </Tooltip>

                </div>
            </div>
        </footer>
    )
}
