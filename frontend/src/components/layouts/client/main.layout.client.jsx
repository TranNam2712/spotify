import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import LeftSideBar from "./sidebar.left";
import RightSideBar from "./sidebar.right";
import { useEffect, useState } from "react";
import NavFooter from "./nav.footer";
import PlayingBar from "./playing.bar";

const MainLayout = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const [collapse, setCollapse] = useState(true);
  const [sidebarRight, setSidebarRight] = useState(true);
  const [tablet, setTablet] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setTablet(true);
      setCollapse(true);
      setSidebarRight(false);
    } else {
      setTablet(false);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col py-1">
      <div className="h-14">
        <Header />
      </div>
      <div className="flex-grow flex gap-2 p-2">
        {/* left sidebar */}
        <div
          className={`${isLogin
              ? showMore
                ? "w-2/5"
                : collapse
                  ? tablet
                    ? "w-1/4"
                    : "w-1/5"
                  : tablet
                    ? "w-[10%]"
                    : "w-[5%]"
              : "w-1/4"
            } bg-forceground-color rounded-xl ${collapse ? "md:px-2 lg:px-6" : ""
            }  py-4`}
        >
          <LeftSideBar
            isLogin={isLogin}
            showMore={showMore}
            setShowMore={setShowMore}
            collapse={collapse}
            setCollapse={setCollapse}
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
          className={`${isLogin
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

      <div className="h-17">
        {isLogin ? <PlayingBar /> : <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
