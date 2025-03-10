/* eslint-disable react/prop-types */
import { BsCollectionFill, BsCollection } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { TfiMenuAlt } from "react-icons/tfi";
import { Tooltip, Button } from "@material-tailwind/react";
import Playlist from "./sidebar.playlist-left";

const LeftSideBar = ({
  isLogin,
  showMore,
  setShowMore,
  collapse,
  setCollapse,
}) => {
  if (!isLogin) {
    return <NotLogin />;
  }

  const toggleShowMore = () => {
    setShowMore(!showMore);
    setCollapse(true);
  };

  const toggleCollapse = () => {
    setCollapse(!collapse);
    setShowMore(false);
  };

  return (
    <div className="h-full flex flex-col">
      {/* header sidebar */}
      <div
        className={`flex items-center ${
          collapse ? "" : "flex-col gap-4"
        } justify-between`}
      >
        {/* collapse sidebar */}
        <Tooltip
          content="Collapse your library"
          className="bg-white text-black"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <div
            className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all cursor-pointer"
            onClick={toggleCollapse}
          >
            {collapse ? (
              <>
                <BsCollectionFill size={20} />
                <span className="font-bold tracking-wider md:text-sm">
                  Your Library
                </span>
              </>
            ) : (
              <BsCollection size={20} />
            )}
          </div>
        </Tooltip>

        {/* create playlist */}
        <div className="flex items-center gap-4">
          <Tooltip content="Create playlist" className="bg-white text-black">
            <div className="bg-[#1f1f1f] p-2 rounded-full cursor-pointer opacity-70 hover:opacity-100 transition-all">
              <IoMdAdd size={20} />
            </div>
          </Tooltip>

          {collapse && (
            <Tooltip content="Show more" className="bg-white text-black">
              <div
                className="p-2 rounded-full cursor-pointer opacity-70 hover:opacity-100 hover:bg-[#1f1f1f] transition-all"
                onClick={toggleShowMore}
              >
                {showMore ? (
                  <FaArrowLeft size={20} />
                ) : (
                  <FaArrowRight size={20} />
                )}
              </div>
            </Tooltip>
          )}
        </div>
      </div>

      {/* suggestion and filter playlist */}
      {collapse && (
        <div
          className={`mt-4 flex ${
            showMore
              ? "flex-row items-center justify-between"
              : "flex-col justify-start"
          }`}
        >
          {/* suggestion playlist */}
          <div className="flex items-center gap-2">
            <span className="bg-[#2a2a2a]/60 px-3 text-sm py-2 rounded-full cursor-pointer hover:bg-[#2a2a2a]">
              Playlists
            </span>
            <span className="bg-[#2a2a2a]/60 px-3 text-sm py-2 rounded-full cursor-pointer hover:bg-[#2a2a2a]">
              Artists
            </span>
          </div>

          {/* filter playlist */}
          <div
            className={`${
              showMore ? "justify-center" : "mt-4 justify-between"
            } flex items-center gap-2`}
          >
            {/* search */}
            <Tooltip
              content="Search in your library"
              className="bg-white text-black"
            >
              <div className="p-2 rounded-full cursor-pointer opacity-70 hover:opacity-100 hover:bg-[#1f1f1f] transition-all">
                <FaSearch size={18} />
              </div>
            </Tooltip>

            {/* filter */}
            <div className="flex items-center gap-2 opacity-70 cursor-pointer hover:opacity-100 hover:scale-105 transition-all">
              <span className="text-sm">Recents</span>
              <TfiMenuAlt size={18} />
            </div>
          </div>
        </div>
      )}

      {/* playlist */}
      <div className="flex-grow overflow-hidden mt-4 h-0 min-h-0">
        <Playlist collapse={collapse} />
      </div>
    </div>
  );
};

export default LeftSideBar;

// not login sidebar
const NotLogin = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-grow">
        {/* header sidebar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-all cursor-pointer">
            <BsCollectionFill />
            <span className="font-bold tracking-wider">Your Library</span>
          </div>

          {/* create playlist */}
          <Tooltip content="Create playlist" className="bg-white text-black">
            <div className="bg-[#1f1f1f] p-2 rounded-full cursor-pointer opacity-70 hover:opacity-100 transition-all">
              <IoMdAdd size={20} />
            </div>
          </Tooltip>
        </div>

        {/* banner create playlist */}
        <div className="mt-12 flex flex-col items-start justify-center gap-2 bg-[#1f1f1f] p-4 rounded-lg w-full">
          <h3 className="font-semibold text-base">
            Create your first playlist
          </h3>
          <span className="text-sm">It&apos;s easy, we&apos;ll help you</span>
          <Button className="mt-4 text-black rounded-full" color="white">
            Create playlist
          </Button>
        </div>

        {/* banner find podcast */}
        <div className="mt-12 flex flex-col items-start justify-center gap-2 bg-[#1f1f1f] p-4 rounded-lg w-full">
          <h3 className="font-semibold text-base">
            Let&apos;s find some podcasts to follow
          </h3>
          <span className="text-sm">It&apos;s easy, we&apos;ll help you</span>
          <Button className="mt-4 text-black rounded-full" color="white">
            Browse podcasts
          </Button>
        </div>
      </div>

      {/* footer sidebar */}
      <div className="grid grid-cols-3 gap-2">
        <span className="text-[10px]">Legal</span>
        <span className="text-[10px]">Safety & privacy Center</span>
        <span className="text-[10px]">Privacy Policy</span>
        <span className="text-[10px]">Cookie</span>
        <span className="text-[10px]">About Ads</span>
        <span className="text-[10px]">Accessibility</span>
      </div>
    </div>
  );
};
