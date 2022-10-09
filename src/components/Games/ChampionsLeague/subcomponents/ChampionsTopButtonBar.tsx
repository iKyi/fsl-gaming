import { Box, Button, Stack, useMediaQuery, useTheme } from "@mui/material";
import purpleBall from "assets/images/icons/purpleBall.png";
import blueBall from "assets/images/icons/blueBall.png";
import { FONTS } from "lib/theme";
import { motion } from "framer-motion";
import { centerFlex } from "utils/sxUtils";
import ArrowsIcon from "assets/images/icons/phaseIconIndicator.png";
import { NavLink } from "react-router-dom";

const imageStyles = {
  width: "40px",
  maxWidth: "100%",
};
const ValueWrapperBoxStyles = {
  display: "flex",
  alignItems: "center",
  py: 1,
  px: 1.5,
};
const SmallTitleStyles = {
  fontFamily: FONTS.MOKOTOONE,
  fontSize: "0.93rem",
};

interface IChampionsTopButtonBar {
  shots?: number;
  maxShots?: number;
  points?: number;
  onClick?: () => void;
}
const ChampionsTopButtonBar: React.FC<IChampionsTopButtonBar> = ({
  shots = 0,
  maxShots = 0,
  points = 0,
  onClick,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const styles = {
    position: (!isMobile ? "absolute" : "relative") as unknown as undefined,
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 4,
    backgroundColor: "rgba(0,0,0,0.75)",
    borderBottom: `1px solid rgba(176, 72, 253, 0.5)`,
    paddingRight: !isMobile ? "15px" : undefined,
  };

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
      style={styles}
    >
      <Box
        sx={{
          ...centerFlex,
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={ValueWrapperBoxStyles}>
          <img src={purpleBall} alt="purple ball" style={imageStyles} />
          <Stack
            spacing={0.35}
            sx={{
              ml: 1.5,
            }}
          >
            <Box sx={SmallTitleStyles}>SHOTS</Box>
            <Box
              sx={{
                fontSize: "1.05rem",
                background: `linear-gradient(208.35deg, #00F5F5 36.37%, #008EF5 46.39%)`,
                webkitBackgroundClip: `text`,
                webkitTextFillColor: `transparent`,
                backgroundClip: `text`,
                textFillColor: `transparent`,
              }}
            >
              {shots}/{maxShots}
            </Box>
          </Stack>
        </Box>
        <Box sx={ValueWrapperBoxStyles}>
          <img src={blueBall} alt="ball ball" style={imageStyles} />
          <Stack
            spacing={0.35}
            sx={{
              ml: 1.5,
            }}
          >
            <Box sx={SmallTitleStyles}>POINTS</Box>
            <Box
              sx={{
                fontSize: "1.05rem",
                background: `linear-gradient(114.84deg, #B048FD 8.75%, #6216D2 51.88%, #3E4ECC 95%, #3E75D5 145.74%)`,
                webkitBackgroundClip: `text`,
                webkitTextFillColor: `transparent`,
                backgroundClip: `text`,
                textFillColor: `transparent`,
              }}
            >
              {points}
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box>
        <Button
          component={NavLink}
          to="/leaderboards"
          sx={{
            ...centerFlex,
            fontFamily: FONTS.MOKOTOONE,
          }}
        >
          <img
            src={ArrowsIcon}
            style={{
              width: 18,
            }}
            alt="arros icon"
          />
          <Box
            sx={{
              ...centerFlex,
              ml: 1,
            }}
          >
            LEADERBOARDS
          </Box>
        </Button>
        <Button
          sx={{
            ...centerFlex,
            fontFamily: FONTS.MOKOTOONE,
          }}
          color="secondary"
          onClick={onClick}
        >
          <img
            src={ArrowsIcon}
            style={{
              width: 18,
            }}
            alt="arros icon"
          />
          <Box
            sx={{
              ...centerFlex,
              ml: 1,
            }}
          >
            BUY SHOTS
          </Box>
        </Button>
      </Box>
    </motion.div>
  );
};

export default ChampionsTopButtonBar;
