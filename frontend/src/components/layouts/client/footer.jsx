import { Button } from "@material-tailwind/react";
import NavFooter from "./nav.footer";

const Footer = () => {
  return (
    // footer lg
    <footer className="bg-gradient-to-r from-[#af2896] to-[#509bf5] w-[99%] mx-auto">
      <div className="hidden lg:flex items-center justify-between py-2 px-8">
        <div>
          <h1 className="font-bold">Preview of Spotify</h1>
          <p className="text-sm">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed
          </p>
        </div>
        <Button className="bg-white text-black rounded-full">
          Sign Up Free
        </Button>
      </div>

      <div className="block lg:hidden">
        <NavFooter />
      </div>
    </footer>
  );
};

export default Footer;
