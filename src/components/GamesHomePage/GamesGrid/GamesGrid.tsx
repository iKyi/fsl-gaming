import { Box, Grid } from "@mui/material";
import GameGridEntry, { IStrapiGameDataType } from "./GameGridEntry";

export type GamesGridPropsType = {
  items?: IStrapiGameDataType[];
};

const GamesGrid: React.FC<GamesGridPropsType> = ({ items = [] }) => {
  const reversedItems = [...items].reverse();
  // *************** RENDER *************** //
  return (
    <Box>
      <Grid container spacing={[2, 2, 4]} justifyContent="center">
        {reversedItems.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <GameGridEntry key={item.id} data={item} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GamesGrid;
