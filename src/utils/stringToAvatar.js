import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { stringToColor } from "./stringToColor";

const stringAvatar = name => {
  const sx = {
    bgcolor: stringToColor(name),
    p: 2.85
  };

  if (name.split(" ").length > 1) {
    return {
      sx,
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
    };
  } else {
    return {
      sx,
      children: `${name[0]}`
    };
  }
};

const backgroundLetterAvatar = name => {
  return (
    <Stack>
      <Avatar {...stringAvatar(name)} />
    </Stack>
  );
};

export default backgroundLetterAvatar;
