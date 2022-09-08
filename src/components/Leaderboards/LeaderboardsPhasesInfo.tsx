import { Box, Stack } from "@mui/material";
import usePageData from "hooks/usePageData";
import { SmallSectionWrapper, SmallTitle } from "./Leaderboards";

import phaseIconIndicator from "assets/images/icons/phaseIconIndicator.png";
import { centerFlex } from "lib/sxUtils";
import MarkdownParser from "components/Reusable/MarkdownParser";

export type LeaderboardsPhasesInfoPropsType = {};

const LeaderboardsPhasesInfo: React.FC<
  LeaderboardsPhasesInfoPropsType
> = () => {
  const { pageData } = usePageData(`game-phase-entries`, true);
  // *************** RENDER *************** //
  if (!pageData || pageData.lenght === 0) return null;
  return (
    <SmallSectionWrapper>
      <SmallTitle>THE CHAMPIONS PHASES</SmallTitle>
      <Stack spacing={[2, 2, 4]}>
        {pageData.map((item: any) => {
          const { name, daysDuration, description } = item?.attributes ?? {};
          return (
            <Box
              key={name}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  ...centerFlex,
                  mr: [2, 2, 3],
                }}
              >
                <img src={phaseIconIndicator} alt="phase indicator" />
              </Box>
              <Stack spacing={1}>
                <Box
                  sx={{
                    display: "flex",
                    algnItems: "center",
                    gap: 3,
                  }}
                >
                  <Box>{name}</Box>
                  <Box
                    sx={{
                      background:
                        "linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)",
                      backgroundClip: "text",
                      textFillColor: "transparent",
                      fontSize: 18,
                    }}
                  >
                    {daysDuration} days
                  </Box>
                </Box>
                {description && (
                  <Box
                    sx={{
                      fontWeight: 300,
                    }}
                  >
                    <MarkdownParser>{description}</MarkdownParser>
                  </Box>
                )}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </SmallSectionWrapper>
  );
};

export default LeaderboardsPhasesInfo;
