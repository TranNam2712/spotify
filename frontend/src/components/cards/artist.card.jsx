import { Avatar } from "@material-tailwind/react";

const ArtistCard = () => {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer rounded-lg p-3 hover:bg-[#1f1f1f]">
      <div>
        <Avatar
          src={`https://docs.material-tailwind.com/img/face-${
            Math.floor(Math.random() * 5) + 1
          }.jpg`}
          alt="avatar"
          variant="circular"
          size="xxl"
        />
      </div>
      <span className="mt-2">Artist Name</span>
      <span className="text-sm text-gray-400">Artist Role</span>
    </div>
  );
};

export default ArtistCard;
