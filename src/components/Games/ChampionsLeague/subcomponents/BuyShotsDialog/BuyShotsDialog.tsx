import {
  Box,
  Button,
  Modal,
  Stack,
  SxProps,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAppDispatch } from "app/hooks";
import CloseGradient from "components/Icons/CloseGradient";
import { doPurchaseChampionsShots } from "features/games/championsLeagueSlice";
import {
  addBlockingSnackbar,
  removeBlockingSnackbar,
} from "features/global/globalSlice";
import { FONTS } from "lib/theme";
import { useMemo, useState } from "react";
import { centerFlex } from "utils/sxUtils";
import AmountButtonsBar from "./AmountButtonsBar";
import buyShotsBackground from "./buyShotsBackground.png";

interface IBuyShotsDialog {
  open?: boolean;
  onClose: () => void;
  currentShots?: number;
  walletId: string;
}
const BuyShotsDialog: React.FC<IBuyShotsDialog> = ({
  open = false,
  currentShots = 0,
  onClose,
  walletId,
}) => {
  const dispatch = useAppDispatch();
  const [currentAmount, setCurrentAmount] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const borderStyles: SxProps<Theme> = useMemo(() => {
    if (isMobile) {
      return {
        py: "20px",
        px: "20px",
      };
    }
    return {
      background: `url('${buyShotsBackground}')`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      py: "120px",
      px: "120px",
    };
  }, [isMobile]);

  const maxPurchase = 15 - currentShots;

  const doPurchase = async () => {
    const snackId = "purchasing-champ-shots";
    dispatch(
      addBlockingSnackbar({
        id: snackId,
        state: "loading",
        text: "Purchasing ....",
      })
    );

    await dispatch(doPurchaseChampionsShots(walletId, currentAmount));
    dispatch(removeBlockingSnackbar(snackId));
    onClose();
  };

  return (
    <Modal
      open={open}
      sx={{
        ...centerFlex,
      }}
      BackdropProps={{
        sx: {
          backgroundColor: `rgba(0,0,0,0.9)`,
        },
      }}
    >
      <>
        <Box
          sx={{
            ...centerFlex,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              ml: "auto",
              fontFamily: FONTS.MOKOTOONE,
              color: "primary.main",
              p: 2,
            }}
            startIcon={<CloseGradient fontSize="inherit" />}
          >
            Close
          </Button>
        </Box>
        <Box
          sx={{
            width: 850,
            maxWidth: "100%",
            ...borderStyles,
          }}
        >
          <Stack
            spacing={2}
            alignItems="center"
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              component="div"
              sx={{
                fontFamily: FONTS.MOKOTOONE,
                fontSize: [24, 24, 28],
              }}
            >
              BUY MORE SHOTS
            </Typography>
            <Box
              sx={{
                fontWeight: 300,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontWeight: "inherit",
                }}
              >
                You can buy a maximum of{" "}
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                }}
              >
                {maxPurchase} shots
              </Typography>
            </Box>
            <AmountButtonsBar
              currentAmount={currentAmount}
              maxAmount={maxPurchase}
              setCurrentAmount={setCurrentAmount}
            />
            <Button variant="fsl" color="secondary" onClick={doPurchase}>
              PAY
              <Typography
                component="span"
                color="primary"
                sx={{
                  fontFamily: FONTS.MOKOTOONE,
                  ml: 1,
                }}
              >
                100 FSL
              </Typography>
            </Button>
            <Button
              onClick={onClose}
              sx={{
                fontFamily: FONTS.MOKOTOONE,
                color: "#fff",
              }}
            >
              CANCEL
            </Button>
          </Stack>
        </Box>
      </>
    </Modal>
  );
};

export default BuyShotsDialog;
