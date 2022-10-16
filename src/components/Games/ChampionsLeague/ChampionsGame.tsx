import { Box, Hidden } from "@mui/material";
import { useState } from "react";
import { centerFlex } from "utils/sxUtils";
import ChampionsVideoBox from "./subcomponents/ChampionsVideoBox";
import { AnimatePresence } from "framer-motion";
import ChampionsBallButtonBox from "./subcomponents/ChampionsBallButtonBox";
import ChampionsTopButtonBar from "./subcomponents/ChampionsTopButtonBar";
import BuyShotsDialog from "./subcomponents/BuyShotsDialog/BuyShotsDialog";
import { useAppDispatch } from "app/hooks";
import { doChampionsLeagueShot } from "features/games/championsLeagueSlice";
import ResponsiveSpace from "components/Reusable/ResponsiveSpace";

const yesTopLeft = "./championVideos/aster/y-left-up.mp4";
const noTopLeft = "./championVideos/aster/n-left-up.mp4";
const yesTopRight = "./championVideos/aster/y-right-up.mp4";
const noTopRight = "./championVideos/aster/n-right-up.mp4";
const yesCenter = "./championVideos/aster/y-center.mp4";
const noCenter = "./championVideos/aster/n-center-down.mp4";
const yesBottomLeft = "./championVideos/aster/y-left-down.mp4";
const noBottomLeft = "./championVideos/aster/n-left-down.mp4";
const yesBottomRight = "./championVideos/aster/y-right-down.mp4";
const noBottomRight = "./championVideos/aster/n-right-down.mp4";

export enum CHAMPIONS_BUTTON_KEYS {
  TOP_LEFT = "topLeft",
  BOTTOM_LEFT = "bottomLeft",
  CENTER = "center",
  TOP_RIGHT = "topRight",
  BOTTOM_RIGHT = "bottomRight",
}

enum SHOOT_RESULT {
  SUCCESS = "success",
  FAIL = "fail",
}
export type ChampionsGamePropsType = {
  walletId: string;
};

type TVideoState = Record<
  string,
  React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
>;

export const ChampionsStateMapper: TVideoState = {
  idle: {
    src: undefined,
    loop: true,
    autoPlay: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.TOP_LEFT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesTopLeft,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.TOP_LEFT}_${SHOOT_RESULT.FAIL}`]: {
    src: noTopLeft,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.CENTER}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesCenter,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.CENTER}_${SHOOT_RESULT.FAIL}`]: {
    src: noCenter,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.TOP_RIGHT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesTopRight,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.TOP_RIGHT}_${SHOOT_RESULT.FAIL}`]: {
    src: noTopRight,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.BOTTOM_LEFT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesBottomLeft,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.BOTTOM_LEFT}_${SHOOT_RESULT.FAIL}`]: {
    src: noBottomLeft,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.BOTTOM_RIGHT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesBottomRight,
    loop: false,
  },
  [`${CHAMPIONS_BUTTON_KEYS.BOTTOM_RIGHT}_${SHOOT_RESULT.FAIL}`]: {
    src: noBottomRight,
    loop: false,
  },
};

const ChampionsGame: React.FC<ChampionsGamePropsType> = ({ walletId }) => {
  const dispatch = useAppDispatch();
  const [puchaseModalActive, setPurchaseModalActive] = useState(false);
  const [videoState, setVideoState] = useState<
    React.DetailedHTMLProps<
      React.VideoHTMLAttributes<HTMLVideoElement>,
      HTMLVideoElement
    >
  >(ChampionsStateMapper["idle"]);
  const [buttonsActive, setButtonsActive] = useState(true);

  const onButtonClick = async (buttonValue: string) => {
    setButtonsActive(false);
    const result = await dispatch(doChampionsLeagueShot(walletId, buttonValue));

    console.log(`Target was ${buttonValue} and result was ${result}`);

    if (result) {
      setVideoState(
        ChampionsStateMapper[`${buttonValue}_${SHOOT_RESULT.SUCCESS}`]
      );
    } else {
      setVideoState(
        ChampionsStateMapper[`${buttonValue}_${SHOOT_RESULT.FAIL}`]
      );
    }
    setTimeout(() => {
      setVideoState(ChampionsStateMapper[`idle`]);
      setButtonsActive(true);
    }, 3000);
  };

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
        <Box>
          <Hidden mdUp>
            <ChampionsTopButtonBar
              onClick={() => setPurchaseModalActive(true)}
            />
          </Hidden>
          <Box
            sx={{
              width: "100%",
              maxWidth: 1366,
              position: "relative",
              ...centerFlex,
            }}
          >
            <Hidden mdDown>
              <AnimatePresence>
                <ChampionsTopButtonBar
                  onClick={() => setPurchaseModalActive(true)}
                />
              </AnimatePresence>
            </Hidden>

            <ChampionsVideoBox
              buttonsActive={buttonsActive}
              videoState={videoState}
            />
            <AnimatePresence>
              {buttonsActive && (
                <ChampionsBallButtonBox onClick={onButtonClick} />
              )}
            </AnimatePresence>
          </Box>
          <BuyShotsDialog
            open={puchaseModalActive}
            onClose={() => setPurchaseModalActive(false)}
            walletId={walletId}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionsGame;
