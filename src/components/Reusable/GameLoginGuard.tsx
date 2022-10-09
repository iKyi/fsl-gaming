import background from "assets/images/backgrounds/championsLoginBackground.png";

import { Box, Stack } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { centerFlex } from "utils/sxUtils";
import SectionHeader from "./SectionHeader";
import WalletLoginButtonTheme from "./WalletLoginButtonTheme";

interface IGameLoginGuard {
  children: any;
  walletBoxPretitle?: string;
  walletBoxTitle?: string;
  walletBoxSubtitle?: string;
}
const GameLoginGuard: React.FC<IGameLoginGuard> = ({
  children,
  walletBoxPretitle,
  walletBoxSubtitle,
  walletBoxTitle,
}) => {
  const { connected } = useWallet();
  // *************** RENDER *************** //
  if (!connected) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100%",
          background: `url('${background}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          ...centerFlex,
        }}
      >
        <Box
          sx={{
            minHeight: "25vh",
            width: "40vw",
            maxWidth: `calc(100% - 40px)`,
            p: [4, 4, 6],
            ...centerFlex,
          }}
        >
          <Stack spacing={[2, 2, 4]}>
            {walletBoxPretitle || walletBoxTitle || walletBoxSubtitle ? (
              <SectionHeader
                disableHeaderBars
                description={walletBoxSubtitle}
                title={walletBoxTitle}
                preTitle={walletBoxPretitle}
                sx={{
                  m: [0, 0, 0, 0, 0],
                }}
              />
            ) : null}
            <Box
              sx={{
                ...centerFlex,
              }}
            >
              <WalletLoginButtonTheme />
            </Box>
          </Stack>
        </Box>
      </Box>
    );
  }
  return children;
};

export default GameLoginGuard;
