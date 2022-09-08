import { Box, Button, Grid, Stack, useTheme } from "@mui/material";
import MarkdownParser from "components/Reusable/MarkdownParser";
import { FONTS } from "lib/theme";
import { getStrapiMedia } from "lib/theme/media";
import { centerFlex } from "utils/sxUtils";
import { IStrapiGameDataType } from "./GamesGrid/GameGridEntry";
import gameSplashBox from "assets/images/backgrounds/gameSplashBox.png";
import { Link } from "react-router-dom";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { DateTime } from "luxon";

export type GameHomeSplashBoxPropsType = {
  data: IStrapiGameDataType;
};

const GameHomeSplashBox: React.FC<GameHomeSplashBoxPropsType> = ({ data }) => {
  const theme = useTheme();
  const { attributes } = data ?? {};
  const {
    tournamentSplashImage,
    icon,
    styledName,
    description,
    gameUrl,
    tournamentActive,
    tournamentStartDate,
    tournamentEndDate,
  } = attributes;

  const iconUrl = getStrapiMedia(icon);
  const spalshImageUrl = getStrapiMedia(tournamentSplashImage);

  const StartElement = () => {
    let started = false;
    if (tournamentActive) {
      started = true;
    }
    if (tournamentStartDate) {
      const now = DateTime.now();
      const startParsed = DateTime.fromISO(tournamentStartDate, {
        zone: "utc",
      });
      if (now > startParsed) {
        started = true;
      } else {
        return (
          <Box
            sx={{
              ...centerFlex,
            }}
          >
            <CalendarMonthOutlined sx={{ mr: 1 }} />
            {DateTime.fromISO(tournamentStartDate, { zone: "utc" }).toFormat(
              "dd.MM.yyyy"
            )}
          </Box>
        );
      }
    }

    if (started) {
      return (
        <Box
          sx={{
            ...centerFlex,
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,
              borderRadius: "100%",
              backgroundColor: "#3BEA96",
              mr: 1,
            }}
          />
          <Box>Started</Box>
        </Box>
      );
    }
    if (!tournamentStartDate) {
      return <Box>TBA</Box>;
    }

    return <Box>TBA</Box>;
  };

  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        background: `url('${gameSplashBox}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "24px",
        border: "1px solid rgba(255,255,255,0.34)",
        mb: [3, 3, 5],
        mt: [2, 2, 3],
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6} xl={6}>
          <Box
            sx={{
              px: [3, 3, 4],
              py: [3, 3, 7],
            }}
          >
            <Stack spacing={[1.5, 1.5, 2]}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: ["10px", "10px", "24px"],
                  fontWeight: 300,
                  padding: "8px",
                }}
              >
                <Box
                  sx={{
                    background: `rgba(255, 255, 255, 0.09)`,
                    border: `1px solid rgba(255, 255, 255, 0.28)`,
                    borderRadius: `4px`,
                    padding: "8px",
                    ...centerFlex,
                  }}
                >
                  <StartElement />
                </Box>
                <Box
                  sx={{
                    background: `rgba(1, 246, 246, 0.13)`,
                    borderRadius: "4px",
                    border: `1px solid rgba(255, 255, 255, 0.28)`,
                    padding: "8px",
                    ...centerFlex,
                  }}
                >
                  NFT Required
                </Box>
                {tournamentEndDate && (
                  <Box
                    sx={{
                      padding: "8px",
                      ...centerFlex,
                    }}
                  >
                    Time left
                    <Box
                      component="span"
                      sx={{
                        ml: 2,
                        color: `rgba(255, 182, 41, 1)`,
                        background: `linear-gradient(180deg, #FF591E 0%, #FFB629 100%)`,
                        backgroundClip: `text`,
                        WebkitTextFillColor: "transparent",
                        fontWeight: 400,
                      }}
                    >
                      {DateTime.fromISO(tournamentEndDate, {
                        zone: "utc",
                      })
                        .toRelative({
                          base: DateTime.now(),
                        })
                        ?.replace("in ", "")}
                    </Box>
                  </Box>
                )}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {iconUrl && (
                  <Box
                    sx={{
                      mr: 1.8,
                      ...centerFlex,
                    }}
                  >
                    <img src={iconUrl} alt="game icon" />
                  </Box>
                )}
                {styledName && (
                  <Box
                    sx={{
                      fontFamily: FONTS.MOKOTOONE,
                      fontSize: [26, 26, 36],
                    }}
                  >
                    <MarkdownParser>{styledName}</MarkdownParser>
                  </Box>
                )}
              </Box>
              {description && (
                <Box
                  sx={{
                    fontWeight: 300,
                    width: 540,
                    maxWidth: "100%",
                  }}
                >
                  <MarkdownParser>{description}</MarkdownParser>
                </Box>
              )}
              <Box sx={{}}>
                <Button
                  variant="fsl"
                  size="small"
                  color="secondary"
                  component={Link}
                  to={`/${gameUrl}`}
                  sx={{ mr: 2, mt: 3 }}
                >
                  PLAY NOW
                </Button>
                <Button
                  variant="fsl"
                  size="small"
                  color="secondary"
                  component={Link}
                  to={`/leaderboards`}
                  sx={{ mt: 3 }}
                >
                  LEADERBOARDS
                </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>
        {spalshImageUrl && (
          <Grid
            item
            xs={12}
            md={6}
            xl={4}
            sx={{
              display: ["none", "none", "block"],
            }}
          >
            <img
              src={spalshImageUrl}
              alt="splash graphic"
              style={{ marginBottom: `-${theme.spacing(7)}` }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default GameHomeSplashBox;
