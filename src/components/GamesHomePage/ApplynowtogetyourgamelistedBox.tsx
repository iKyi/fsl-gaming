import { Box } from "@mui/material";
import SectionHeader from "components/Reusable/SectionHeader";
import StrapiLinkButton from "components/Reusable/StrapiLinkButton";
import { centerFlex } from "utils/sxUtils";

export type ApplynowtogetyourgamelistedBoxPropsType = {
  gameListedPretitle?: string | null;
  gameListedTitle?: string | null;
  gameListedSubtitle?: string | null;
  applyListingNowButton?: any;
};

const ApplynowtogetyourgamelistedBox: React.FC<
  ApplynowtogetyourgamelistedBoxPropsType
> = ({
  gameListedPretitle,
  gameListedTitle,
  gameListedSubtitle,
  applyListingNowButton,
}) => {
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
          border: "1px solid",
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(168.82deg, #FB37FF 1.7%, rgba(155, 111, 238, 0) 27.12%, rgba(123, 127, 234, 0) 61.28%, #1BB2DE 99.52%)`,
          backgroundColor: `rgba(0,0,0,0.35)`,
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
