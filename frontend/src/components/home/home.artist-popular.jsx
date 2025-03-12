import { NavLink } from "react-router-dom";
import ArtistCard from "../cards/artist.card";
import AlbumCard from "../cards/album.card";

const PopularArtists = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* list artist */}
      <div>
        <div className="flex items-center justify-between">
          <NavLink
            className="font-semibold tracking-wider text-2xl hover:underline"
            to={"/popular-artists"}
          >
            Popular Artists
          </NavLink>

          <NavLink
            className="text-sm font-semibold text-gray-400 hover:underline"
            to={"/popular-artists"}
          >
            See all
          </NavLink>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
          <ArtistCard />
        </div>
      </div>

      {/* list album */}
      <div>
        <div className="flex items-center justify-between">
          <NavLink
            className="font-semibold tracking-wider text-2xl hover:underline"
            to={"/popular-artists"}
          >
            Popular Artists
          </NavLink>

          <NavLink
            className="text-sm font-semibold text-gray-400 hover:underline"
            to={"/popular-artists"}
          >
            See all
          </NavLink>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5  gap-4 mt-5">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </div>
      </div>
    </div>
  );
};

export default PopularArtists;
