import { ButtonBase, ButtonProps } from "@mui/material";
import React, { useState } from "react";
import { centerFlex } from "utils/sxUtils";
import BallBlueIcon from "./BallBlueIcon";
import BallOrangeIcon from "./BallOrangeIcon";

const IconStyles = {
  fontSize: "inherit",
};

const BallButton: React.FC<ButtonProps> = (props) => {
  const [hovered, setHovered] = useState(false);

  const onClickAction = (e: any) => {
    setHovered(false);
    props.onClick?.(e);
  };

  return (
    <ButtonBase
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClickAction}
      sx={{
        fontSize: ["50px", "50px", "100px"],
        borderRadius: "80%",
        ...centerFlex,
      }}
    >
      {hovered ? (
        <BallOrangeIcon sx={IconStyles} />
      ) : (
        <BallBlueIcon sx={IconStyles} />
      )}
    </ButtonBase>
  );
};

export default BallButton;
