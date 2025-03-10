/* eslint-disable react/prop-types */
import { Avatar, Typography } from "@material-tailwind/react";
import { FaPlay } from "react-icons/fa";

const Playlist = ({ collapse }) => {
  return (
    <div className="flex flex-col gap-4 max-h-full overflow-y-scroll custom-scrollbar">
      {/* playlist */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          className="flex flex-col gap-6 rounded-lg hover:bg-[#1f1f1f] cursor-pointer"
          key={index}
        >
          <div
            className={`flex items-center ${
              !collapse && "mx-auto"
            } gap-4 p-2 group`}
          >
            <div className="relative">
              <Avatar
                src={`https://docs.material-tailwind.com/img/face-${
                  Math.floor(Math.random() * 5) + 1
                }.jpg`}
                alt="avatar"
                variant={index % 2 === 0 ? "circular" : "rounded"}
              />
              <FaPlay
                className={`${
                  collapse ? "absolute right-2 top-2" : "hidden"
                } text-2xl opacity-0 group-hover:opacity-100 transition-all cursor-pointer`}
              />
            </div>
            {collapse && (
              <div>
                <Typography variant="h6">Playlist</Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Artist
                </Typography>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
