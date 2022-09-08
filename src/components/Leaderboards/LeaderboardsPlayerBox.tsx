import { Box, Grid, Stack, SxProps, Theme } from "@mui/material";
import leaderPlayerBox from "assets/images/backgrounds/leaderPlayerBox.png";
import { FONTS } from "lib/theme";
import playersIcon from "assets/images/icons/playersIcon.png";
import prizeIcon from "assets/images/icons/prizeIcon.png";
import timeIcon from "assets/images/icons/timeIcon.png";
import { centerFlex } from "utils/sxUtils";
import getPlaceSuffix from "utils/getPlaceSuffix";

export type LeaderboardsPlayerBoxPropsType = {
  playerPlace?: number;
  totalPlayers?: number;
  totalPrizes?: number;
  daysNumber?: number;
};

const smallTextStyles: SxProps<Theme> = {
  fontWeight: 300,
  fontSize: 14,
};

const LeaderboardsPlayerBox: React.FC<LeaderboardsPlayerBoxPropsType> = ({
  playerPlace,
  totalPlayers,
  totalPrizes,
  daysNumber,
}) => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        border: "1px solid",
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(168.82deg, #FB37FF 1.7%, rgba(155, 111, 238, 0) 27.12%, rgba(123, 127, 234, 0) 61.28%, #1BB2DE 99.52%)`,
        backgroundColor: `rgba(0,0,0,0.35)`,
        my: [2, 2, 3],
      }}
    >
      <Box>
        <Grid container>
          {playerPlace && (
            <Grid item xs={6} sm={4} md={3}>
              <Box
                sx={{
                  background: `url('${leaderPlayerBox}')`,
                  backgroundSize: "100% 100%",
                  p: 3,
                  height: "100%",
                  ...centerFlex,
                  justifyContent: "flex-start",
                }}
              >
                <Stack>
                  <Box sx={{ ...smallTextStyles }}>YOUR PLACE</Box>
                  <Box
                    sx={{
                      fontFamily: FONTS.MOKOTOONE,
                      textTransform: "uppercase",
                    }}
                  >
                    <Box
                      sx={{
                        background: `linear-gradient(208.35deg, #00F5F5 36.37%, #008EF5 46.39%)`,
                        backgroundClip: `text`,
                        WebkitTextFillColor: "transparent",
                      }}
                      component="span"
                    >
                      {playerPlace}
                    </Box>
                    {getPlaceSuffix(playerPlace)}
                  </Box>
                </Stack>
              </Box>
            </Grid>
          )}
          {totalPlayers && (
            <Grid item xs={6} sm={4} md={3}>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  ...centerFlex,
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    ...centerFlex,
                  }}
                >
                  <img src={playersIcon} alt="players icon" />
                </Box>
                <Stack>
                  <Box sx={{ ...smallTextStyles }}>PLAYERS</Box>
                  <Box
                    sx={{
                      background: `linear-gradient(208.35deg, #00F5F5 36.37%, #008EF5 46.39%)`,
                      backgroundClip: `text`,
                      WebkitTextFillColor: "transparent",
                      fontSize: 18,
                    }}
                    component="span"
                  >
                    {totalPlayers}
                  </Box>
                </Stack>
              </Box>
            </Grid>
          )}

          {totalPrizes && (
            <Grid item xs={6} sm={4} md={3}>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  ...centerFlex,
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    ...centerFlex,
                  }}
                >
                  <img src={prizeIcon} alt="players icon" />
                </Box>
                <Stack>
                  <Box sx={{ ...smallTextStyles }}>TOTAL PRIZES</Box>
                  <Box
                    sx={{
                      background: `linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)`,
                      backgroundClip: `text`,
                      WebkitTextFillColor: "transparent",
                      fontSize: 18,
                    }}
                    component="span"
                  >
                    {totalPrizes} SOL
                  </Box>
                </Stack>
              </Box>
            </Grid>
          )}
          {daysNumber && (
            <Grid item xs={6} sm={4} md={3}>
              <Box
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  ...centerFlex,
                  justifyContent: "flex-start",
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    ...centerFlex,
                  }}
                >
                  <img src={timeIcon} alt="players icon" />
                </Box>
                <Stack>
                  <Box sx={{ ...smallTextStyles }}>TIME PHASE #1</Box>
                  <Box
                    sx={{
                      background: `linear-gradient(180deg, #FF591E 0%, #FFB629 100%)`,
                      backgroundClip: `text`,
                      WebkitTextFillColor: "transparent",
                      fontSize: 18,
                    }}
                    component="span"
                  >
                    {daysNumber} days
                  </Box>
                </Stack>
              </Box>
            </Grid>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default LeaderboardsPlayerBox;
