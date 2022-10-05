import { Box } from "@mui/material";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import ChampionsGame from "./ChampionsGame";

export type ChampionsLeaguePropsType = {
  children?: any;
};

const ChampionsLeague: React.FC<ChampionsLeaguePropsType> = ({ children }) => {
  // *************** RENDER *************** //
  return (
    <Box>
      <ResponsiveSpace />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChampionsGame />
      </Box>
    </Box>
  );
};

export default ChampionsLeague;
