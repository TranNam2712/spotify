import PopularAlbum from "../components/home/home.album-popular";
import PopularArtists from "../components/home/home.artist-popular";

const Home = () => {
  return (
    <div>
      <PopularArtists />
      <PopularAlbum />
    </div>
  );
};

export default Home;
