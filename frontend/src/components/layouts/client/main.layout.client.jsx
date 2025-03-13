import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LeftSideBar from "./sidebar.left";
import RightSideBar from "./sidebar.right";
import { useEffect, useState } from "react";
import NavFooter from "./nav.footer";
import PlayingBar from "./playing.bar";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapse } from "../../../redux/features/sidebar/sidebar.slice";

const MainLayout = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [sidebarRight, setSidebarRight] = useState(true);
  const [tablet, setTablet] = useState(false);
  const { isShowQueue, isShowNowPlaying, isShowMore, isCollapseSidebarLeft } =
    useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setTablet(true);
      dispatch(toggleCollapse());
      setSidebarRight(false);
    } else {
      setTablet(false);
    }
  }, []);

  useEffect(() => {
    if (!isShowNowPlaying && !isShowQueue) setSidebarRight(false);
    else setSidebarRight(true);
  }, [isShowNowPlaying, isShowQueue]);

  return (
    <div className="min-h-screen flex flex-col py-1">
      <div className="h-14">
        <Header />
      </div>
      <div className="flex-grow flex gap-2 p-2">
        {/* left sidebar */}
        <div
          className={`${
            isLogin
              ? isShowMore
                ? "w-2/5"
                : isCollapseSidebarLeft
                ? tablet
                  ? "w-1/4"
                  : "w-1/5"
                : tablet
                ? "w-[10%]"
                : "w-[5%]"
              : "w-1/4"
          } bg-forceground-color rounded-xl ${
            isCollapseSidebarLeft ? "md:px-2 lg:px-6" : ""
          }  py-4`}
        >
          <LeftSideBar
            isLogin={isLogin}
            showMore={isShowMore}
            collapse={isCollapseSidebarLeft}
          />
        </div>

        {/* content */}
        <div
          className={`flex-grow bg-forceground-color rounded-xl px-10 py-4 max-h-[calc(100vh-9rem)] flex flex-col overflow-y-auto custom-scrollbar`}
        >
          <div className="flex-grow">
            <Outlet />
          </div>

          <NavFooter />
        </div>

        {/* right sidebar */}
        <div
          className={`${
            isLogin
              ? sidebarRight
                ? tablet
                  ? "w-1/3"
                  : "w-1/5"
                : "hidden"
              : "hidden"
          } bg-forceground-color rounded-xl px-1 py-4`}
        >
          <RightSideBar />
        </div>
      </div>

      <div>{isLogin ? <PlayingBar /> : <Footer />}</div>
    </div>
  );
};

export default MainLayout;
