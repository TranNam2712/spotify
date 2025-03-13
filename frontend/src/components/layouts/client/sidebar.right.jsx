import { useSelector } from "react-redux";
import NowPlayingView from "./nowplaying.view";
import Queue from "./queue";

const RightSideBar = () => {
  const { isShowQueue, isShowNowPlaying } = useSelector(
    (state) => state.sidebar
  );

  return (
    <div>
      {isShowNowPlaying ? <NowPlayingView></NowPlayingView> : <></>}

      {isShowQueue ? <Queue></Queue> : <></>}
    </div>
  );
};

export default RightSideBar;
