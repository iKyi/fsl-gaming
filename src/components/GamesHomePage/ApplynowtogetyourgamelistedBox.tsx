import { Box } from "@mui/material";
import SectionHeader from "components/Reusable/SectionHeader";
import StrapiLinkButton from "components/Reusable/StrapiLinkButton";
import { getStrapiMedia } from "lib/theme/media";
import { centerFlex } from "utils/sxUtils";
import logoFaded from "assets/images/logoFaded.png";

export type ApplynowtogetyourgamelistedBoxPropsType = {
  gameListedPretitle?: string | null;
  gameListedTitle?: string | null;
  gameListedSubtitle?: string | null;
  applyListingNowButton?: any;
  gameListedBackgroundImage?: any;
};

const ApplynowtogetyourgamelistedBox: React.FC<
  ApplynowtogetyourgamelistedBoxPropsType
> = ({
  gameListedPretitle,
  gameListedTitle,
  gameListedSubtitle,
  applyListingNowButton,
  gameListedBackgroundImage,
}) => {
  const backgroundUrl = getStrapiMedia(gameListedBackgroundImage);
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        mt: [3, 3, 5],
        mb: [4, 4, 6],
      }}
    >
      <Box
        sx={{
          background: `url('${logoFaded}') ,url('${backgroundUrl}')`,
          backgroundSize: "220px auto ,100% 100%",
          backgroundPosition: "10% center ,center center",
          backgroundRepeat: "no-repeat, no-repeat",
          px: 1,
          py: [3, 3, 5],
        }}
      >
        <SectionHeader
          preTitle={gameListedPretitle ?? undefined}
          description={gameListedSubtitle ?? undefined}
          title={gameListedTitle ?? undefined}
          disableHeaderBars
        />
        <Box
          sx={{
            ...centerFlex,
          }}
        >
          <StrapiLinkButton {...applyListingNowButton} />
        </Box>
      </Box>
    </Box>
  );
};

export default ApplynowtogetyourgamelistedBox;
