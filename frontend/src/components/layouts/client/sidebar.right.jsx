import { useDispatch, useSelector } from "react-redux";
import NowPlayingView from "./nowplaying.view";
import Queue from "./queue";
import { useEffect } from "react";

const RightSideBar = () => {
  const { isShowQueue, isShowNowPlaying } = useSelector((state) => state.sidebar)
  useEffect(() => {
    console.log(isShowNowPlaying)
  }, [])

  return (

    <div>
      {isShowNowPlaying ? <NowPlayingView></NowPlayingView> : <></>}

      {isShowQueue ? <Queue></Queue> : <></>}
    </div>
  )
};

export default RightSideBar;
