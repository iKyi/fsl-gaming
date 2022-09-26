import { Box, Button, Stack, Grid } from "@mui/material";
import TrophyIcon from "components/Icons/TrophyIcon";
import { getStrapiMedia } from "lib/theme/media";
import { Link } from "react-router-dom";
import { centerFlex } from "utils/sxUtils";
import { DateTime } from "luxon";
import { CalendarMonthOutlined } from "@mui/icons-material";

export interface IStrapiGameDataType {
  id: number;
  attributes: {
    color?: string | null;
    createdAt: string;
    description?: string | null;
    icon?: any;
    image?: any;
    name: string;
    solPrize: number | null;
    styledName: string | null;
    tournamentActive: boolean | null;
    tournamentEndDate: string | null;
    tournamentSplashImage?: any;
    tournamentStartDate: string | null;
    gameUrl: string | null;
    type: null | string;
  };
}

export type GameGridEntryPropsType = {
  data: IStrapiGameDataType;
};

const GameGridEntry: React.FC<GameGridEntryPropsType> = ({ data }) => {
  const { attributes } = data;
  const {
    name,
    tournamentActive,
    tournamentStartDate,
    color: gameColor,
    icon,
    image,
    solPrize,
    gameUrl,
    type,
    description,
  } = attributes;

  const bannerImageUrl = getStrapiMedia(image);
  const iconUrl = getStrapiMedia(icon);
  const typeText = type === "tournament" ? "TOURNAMENT" : "COIN FLIP";

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
              fontSize: "1.1rem",
              fontWeight: 300,
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
          <Box>LIVE</Box>
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
        border: "1px solid",
        filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
        borderImageSlice: 1,
        borderImageSource: `linear-gradient(168.82deg, #FB37FF 1.7%, rgba(155, 111, 238, 0) 27.12%, rgba(123, 127, 234, 0) 61.28%, #1BB2DE 99.52%)`,
        background: `rgba(255, 255, 255, 0.03)`,
        backdropFilter: `blur(649.821px)`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: 2,
      }}
    >
      {bannerImageUrl && (
        <Box
          sx={{
            width: "100%",
            height: [150, 150, 200, 220],
            background: `url('${bannerImageUrl}')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            boxShadow: `0px 0px 15px rgba(0, 245, 245, 0.25)`,
          }}
        />
      )}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          my: [2, 2, 3],
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
        <Stack spacing={0.4}>
          <Box
            sx={{
              color: "common.gray",
              fontSize: [10, 12, 12],
              fontWeight: 300,
              lineHeight: "17px",
              letterSpacing: "5px",
              m: 0,
              textTransform: "uppercase",
            }}
          >
            {typeText}
          </Box>
          <Box
            sx={{
              fontSize: "1.3rem",
              fontWeight: 300,
            }}
          >
            {name}
          </Box>
        </Stack>
      </Box>
      {description && (
        <Box
          sx={{
            mb: [2, 2, 3],
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "28px",
          }}
        >
          {description}
        </Box>
      )}
      <Grid container>
        <Grid item xs={6}>
          <Stack
            spacing={1}
            sx={{
              mr: 3,
            }}
          >
            <Box
              sx={{ color: "common.gray", fontWeight: 300, fontSize: "1.1rem" }}
            >
              Prize
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  color: gameColor,
                  ...centerFlex,
                }}
              >
                <TrophyIcon color="inherit" sx={{ mr: 1 }} />
              </Box>
              <Box
                sx={{
                  fontSize: "1.1rem",
                  fontWeight: 300,
                }}
              >
                {solPrize ? `${solPrize} SOL` : "TBA"}
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={1}>
            <Box
              sx={{ color: "common.gray", fontWeight: 300, fontSize: "1.1rem" }}
            >
              Start date
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <StartElement />
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {gameUrl && (
        <Box
          sx={{
            mt: "auto",
            pt: 4,
            pb: 1,
          }}
        >
          <Button
            size="small"
            variant="fsl"
            color="secondary"
            component={Link}
            to={gameUrl}
            sx={{
              py: 2,
            }}
          >
            PLAY NOW
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GameGridEntry;
