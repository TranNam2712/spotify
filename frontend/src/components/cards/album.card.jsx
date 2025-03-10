import { Avatar } from "@material-tailwind/react";

const AlbumCard = () => {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer rounded-lg p-3 hover:bg-[#1f1f1f]">
      <Avatar
        src={`https://docs.material-tailwind.com/img/face-${
          Math.floor(Math.random() * 5) + 1
        }.jpg`}
        alt="avatar"
        variant="rounded"
        size="xxl"
      />
      <span className="mt-2">Album Name</span>
      <span className="text-sm text-gray-400">Album Role</span>
    </div>
  );
};

export default AlbumCard;
