import { Box } from "@mui/material";
import { useAppSelector } from "app/hooks";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";
import usePageData from "hooks/usePageData";
import { FONTS } from "lib/theme";
import ApplynowtogetyourgamelistedBox from "./ApplynowtogetyourgamelistedBox";
import GameHomeSplashBox from "./GameHomeSplashBox";
import { IStrapiGameDataType } from "./GamesGrid/GameGridEntry";
import GamesGrid from "./GamesGrid/GamesGrid";

export type GamesHomePagePropsType = {
  children?: any;
};

const GamesHomePage: React.FC<GamesHomePagePropsType> = ({ children }) => {
  const { pageData: gamesData } = usePageData("game-entries", true);
  const publicSiteData = useAppSelector((state) => state.global.publicSiteData);
  const {
    gameListedPretitle,
    gameListedTitle,
    gameListedSubtitle,
    applyListingNowButton,
    gameListedBackgroundImage,
  } = publicSiteData ?? {};

  const splashGame = gamesData?.find(
    (item: IStrapiGameDataType) =>
      item.attributes.gameUrl === "champions-league"
  );

  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        px: [2, 2, 4],
      }}
    >
      <ResponsiveSpace />
      {splashGame && <GameHomeSplashBox data={splashGame} />}
      <Box
        sx={{
          fontSize: [18, 18, 22],
          fontFamily: FONTS.MOKOTOONE,
          py: 2,
        }}
      >
        FSL GAMES
      </Box>
      {gamesData && <GamesGrid items={gamesData} />}
      <ApplynowtogetyourgamelistedBox
        applyListingNowButton={applyListingNowButton}
        gameListedTitle={gameListedTitle}
        gameListedSubtitle={gameListedSubtitle}
        gameListedPretitle={gameListedPretitle}
        gameListedBackgroundImage={gameListedBackgroundImage}
      />
      <ResponsiveSpace />
    </Box>
  );
};

export default GamesHomePage;
