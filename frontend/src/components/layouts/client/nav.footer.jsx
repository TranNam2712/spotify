import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const SITEMAP = [
  {
    title: "Company",
    links: [
      { label: "About", link: "/about" },
      { label: "Jobs", link: "/jobs" },
      { label: "For the Record", link: "/record" },
    ],
  },
  {
    title: "Communities",
    links: [
      { label: "For Artists", link: "/for-artists" },
      { label: "Developers", link: "/developers" },
      { label: "Advertising", link: "/advertising" },
      { label: "Investors", link: "/investors" },
      { label: "Vendors", link: "/vendors" },
    ],
  },
  {
    title: "Useful links",
    links: [
      { label: "Support", link: "/support" },
      { label: "Free Mobile App", link: "/mobile" },
    ],
  },
  {
    title: "Spotify Plans",
    links: [
      { label: "Premium Individual", link: "/premium" },
      { label: "Premium Student", link: "/student" },
      { label: "Spotify Free", link: "/free" },
    ],
  },
];

const currentYear = new Date().getFullYear();

const NavFooter = () => {
  return (
    <footer className="relative w-full bg-[#121212]">
      <div className="mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography variant="small" className="mb-4 font-bold text-white">
                {title}
              </Typography>
              <ul className="space-y-2">
                {links.map((item, key) => (
                  <li key={key}>
                    <Link
                      to={item.link}
                      className="block font-normal text-gray-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-gray-800 py-4 md:flex-row md:justify-between">
          <div className="flex gap-4 text-gray-400 sm:justify-center">
            <Link
              to="#"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <FaFacebook className="h-6 w-6" />
            </Link>
          </div>
          <Typography className="font-normal text-gray-400 mt-4 md:mt-0">
            &copy; {currentYear} Spotify AB
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default NavFooter;
