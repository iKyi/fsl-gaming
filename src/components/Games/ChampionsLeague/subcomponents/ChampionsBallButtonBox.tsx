import { Box, SxProps, Theme } from "@mui/material";
import BallButton from "components/Games/BallButton";
import { motion } from "framer-motion";
import { centerFlex } from "utils/sxUtils";
import { CHAMPIONS_BUTTON_KEYS } from "../ChampionsGame";

const BoxStyles: SxProps<Theme> = {
  ...centerFlex,
};

interface IChampionsBallButtonBox {
  onClick: (location: string) => void;
}
const ChampionsBallButtonBox: React.FC<IChampionsBallButtonBox> = ({
  onClick,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      style={{
        gridTemplateAreas: `
          "topLeft middleTop topRight"
          "centerButton centerButton centerButton"
          "bottomLeft middleBottom bottomRight"
          `,
        display: "grid",
        gridGap: "5px",
        position: "absolute",
        zIndex: 3,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <Box
        sx={{
          gridArea: "topLeft",
          ...BoxStyles,
          mt: "auto",
        }}
      >
        <BallButton
          id={CHAMPIONS_BUTTON_KEYS.TOP_LEFT}
          onClick={() => onClick(CHAMPIONS_BUTTON_KEYS.TOP_LEFT)}
        />
      </Box>

      <Box
        sx={{
          gridArea: "topRight",
          ...BoxStyles,
          mt: "auto",
        }}
      >
        <BallButton
          id={CHAMPIONS_BUTTON_KEYS.TOP_RIGHT}
          onClick={() => onClick(CHAMPIONS_BUTTON_KEYS.TOP_RIGHT)}
        />
      </Box>

      <Box
        sx={{
          gridArea: "centerButton",
          ...BoxStyles,
        }}
      >
        <BallButton
          id={CHAMPIONS_BUTTON_KEYS.CENTER}
          onClick={() => onClick(CHAMPIONS_BUTTON_KEYS.CENTER)}
        />
      </Box>

      <Box
        sx={{
          gridArea: "bottomLeft",
          ...BoxStyles,
          mb: "auto",
        }}
      >
        <BallButton
          id={CHAMPIONS_BUTTON_KEYS.BOTTOM_LEFT}
          onClick={() => onClick(CHAMPIONS_BUTTON_KEYS.BOTTOM_LEFT)}
        />
      </Box>
      <Box
        sx={{
          gridArea: "bottomRight",
          ...BoxStyles,
          mb: "auto",
        }}
      >
        <BallButton
          id={CHAMPIONS_BUTTON_KEYS.BOTTOM_RIGHT}
          onClick={() => onClick(CHAMPIONS_BUTTON_KEYS.BOTTOM_RIGHT)}
        />
      </Box>
    </motion.div>
  );
};

export default ChampionsBallButtonBox;
