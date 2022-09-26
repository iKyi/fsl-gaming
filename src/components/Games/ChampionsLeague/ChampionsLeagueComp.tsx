import { Box } from "@mui/material";
import ChampionsGame from "./ChampionsGame";

export type ChampionsLeaguePropsType = {
  children?: any;
};

const ChampionsLeague: React.FC<ChampionsLeaguePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ChampionsGame />
    </Box>
  );
};

export default ChampionsLeague;
