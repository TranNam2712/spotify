import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import SongCard from "../../cards/song.card";

export default function NowPlayingView({ artits }) {
  const song = {
    idSong: 1,
    imageSong: "https://docs.material-tailwind.com/img/face-2.jpg",
    nameSong: "thien li oi",
    nameArtists: "jack",
    nameAlbum: "",
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mx-2 gap-2 ">
        <div className="line-clamp-1">
          <h6 className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos minus
            magni excepturi quaerat cumque, laboriosam voluptate vel, molestiae
            tenetur qui in modi unde nemo adipisci mollitia labore, magnam
            eligendi. Repudiandae!
          </h6>
        </div>

        <div className="flex items-center gap-4">
          <HiDotsHorizontal />
          <IoMdClose />
        </div>
      </div>

      <div className="py-3 max-h-[calc(100vh-15rem)] mt-5 overflow-y-auto custom-scrollbar ">
        {/* background image */}
        <img
          className="w-full h-96 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 opacity-50 hover:opacity-90 bac"
          src="/assets/idol.jpg"
          alt="nature image"
        />

        <div className="lg:mx-4 ">
          {/* song info */}
          <div className="flex justify-between items-center px-2">
            <div className="flex flex-col">
              <NavLink className="font-semibold tracking-wider text-2xl hover:underline ">
                Thien li oi
              </NavLink>
              <NavLink className="font-thin hover:underline">Jack-j97</NavLink>
            </div>
            <CiCirclePlus size={21} />
          </div>

          {/* card artist */}

          {/* image artist */}
          <Card className="mt-6 w-full bg-[#1F1F1F] cursor-pointer">
            <CardHeader
              color="blue-gray"
              floated={false}
              className="h-auto mx-0 mt-0 rounded-b-none relative"
            >
              <img className="mx-0 w-full" src="/assets/idol.jpg" />
              <Typography variant="h6" className="absolute top-4 left-4">
                About the artist
              </Typography>
            </CardHeader>

            {/* info artist */}
            <CardBody>
              <NavLink className="font-semibold tracking-wider hover:underline text-white">
                Jack
              </NavLink>
              <div className="flex justify-between items-center">
                <Typography className="text-[#a8a8a8]">
                  2102122 monthly listener
                </Typography>
                <button
                  className="rounded-full bg-transparent border-2 border-[#a2a1a1] text-sm h-8 px-3 text-white hover:border-[#fff]"
                  type="button"
                >
                  Unfollow
                </button>
              </div>

              <div className="max-h-16 py-2 line-clamp-2 ">
                <Typography variant="paragraph" className="text-[#a8a8a8]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore nihil fugit esse temporibus totam officiis nemo
                  nesciunt, quasi maiores sit non ipsa at facere quidem quam
                  debitis autem ad alias!
                </Typography>
              </div>
            </CardBody>
          </Card>

          {/* credit */}

          <div className="bg-[#1F1F1F] rounded-xl pt-2 pb-5 mt-3">
            {/* creadit */}
            <div className="flex flex-row justify-between lg:mx-4 mt-3">
              <Typography variant="h6">Credits</Typography>

              <button className="border-none bg-transparent text-sm text-[#a8a8a8] ">
                Show all
              </button>
            </div>

            {/* info */}
            <div className="flex flex-row lg:mx-4 mt-6 items-center">
              <div className="flex flex-col ">
                <NavLink className="font-semibold tracking-wider hover:underline text-white">
                  Jack-J97
                </NavLink>
                <Typography variant="small" className="text-[#a8a8a8]">
                  Main Artist, Composer
                </Typography>
              </div>

              <button
                className="rounded-full bg-transparent border-2 border-[#a2a1a1] text-sm h-8 px-3 text-white hover:border-[#fff]"
                type="button"
              >
                Unfollow
              </button>
            </div>
          </div>

          {/* next in queue */}

          <div className="bg-[#1F1F1F] rounded-xl pt-2 pb-5 mt-3">
            {/* Queue */}
            <div className="flex flex-row justify-between lg:mx-4 mt-3">
              <Typography variant="h6">Next in queue</Typography>

              <button className="border-none bg-transparent text-sm text-[#a8a8a8] ">
                Open queue
              </button>
            </div>

            {/*playlist card*/}
            <div className="flex flex-row lg:mx-4 mt-6 items-center">
              <SongCard data={song}></SongCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
