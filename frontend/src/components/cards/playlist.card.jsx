/* eslint-disable react/prop-types */
import { Avatar, Typography } from "@material-tailwind/react";

const PlaylistCard = ({ avatar, name, description, role }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar src={avatar} alt="avatar" variant="rounded" />
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="small" color="gray" className="font-normal">
            {description ? description : role}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
