import { Box } from "@mui/material";
import { useAppSelector } from "app/hooks";
import MarkdownParser from "components/Reusable/MarkdownParser";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import { FONTS } from "lib/theme";
import { mockTableData } from "mockData/leaderboardTableitems";
import { FC } from "react";
import LeaderboardsPhasesInfo from "./LeaderboardsPhasesInfo";
import LeaderboardsPlayerBox from "./LeaderboardsPlayerBox";
import LeaderTable from "./LeaderTable";

export const SmallTitle: FC = ({ children }) => {
  return (
    <Box
      sx={{
        fontFamily: FONTS.MOKOTOONE,
        mb: [3, 3, 4],
        fontSize: [18, 18, 22],
        color: "#fff",
        textShadow: `0px 0px 10px #6216D2`,
      }}
    >
      {children}
    </Box>
  );
};

export const SmallSectionWrapper: FC = ({ children }) => {
  return (
    <Box
      sx={{
        my: [3, 3, 5],
        width: ["100%", "100%", "80%", "70%"],
      }}
    >
      {children}
    </Box>
  );
};

export type LeaderboardsPropsType = {
  children?: any;
};

const Leaderboards: React.FC<LeaderboardsPropsType> = ({ children }) => {
  const publicSiteData = useAppSelector((state) => state.global.publicSiteData);

  const detailsPrizes = publicSiteData?.detailsPrizes ?? null;
  const leaderboardsPrizePoolData =
    publicSiteData?.leaderboardsPrizePoolData ?? null;

  // *************** RENDER *************** //
  return (
    <Box sx={{ px: [2, 2, 4] }}>
      <ResponsiveSpace />
      <LeaderboardsPlayerBox
        playerPlace={5}
        totalPrizes={6500}
        totalPlayers={3400}
        daysNumber={19}
      />
      <LeaderTable items={mockTableData} />
      {detailsPrizes && (
        <SmallSectionWrapper>
          <SmallTitle>DETAILS & PRIZES</SmallTitle>
          <Box
            sx={{
              fontWeight: 300,
            }}
          >
            <MarkdownParser>{detailsPrizes}</MarkdownParser>
          </Box>
        </SmallSectionWrapper>
      )}
      <LeaderboardsPhasesInfo />
      {leaderboardsPrizePoolData && (
        <SmallSectionWrapper>
          <SmallTitle>
            CHAMPIONS PRIZE POOL
            <Box sx={{ fontWeight: 300, fontFamily: FONTS.LATO, fontSize: 16 }}>
              (IN CASE OF SOLD OUT)
            </Box>
          </SmallTitle>

          <Box
            sx={{
              fontWeight: 300,
            }}
          >
            <MarkdownParser>{leaderboardsPrizePoolData}</MarkdownParser>
          </Box>
        </SmallSectionWrapper>
      )}
    </Box>
  );
};

export default Leaderboards;
