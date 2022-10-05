import { Box, SxProps, Theme } from "@mui/material";
import { useState } from "react";
import { centerFlex } from "utils/sxUtils";
import BallButton from "../BallButton";

import idle from "./videos/aster/idle.mp4";
import yesTopLeft from "./videos/aster/y-left-up.mp4";
import noTopLeft from "./videos/aster/n-left-up.mp4";
import yesTopRight from "./videos/aster/y-right-up.mp4";
import noTopRight from "./videos/aster/n-right-up.mp4";
import yesCenter from "./videos/aster/y-center.mp4";
import noCenter from "./videos/aster/n-center-down.mp4";
import yesBottomLeft from "./videos/aster/y-left-down.mp4";
import noBottomLeft from "./videos/aster/n-left-down.mp4";
import yesBottomRight from "./videos/aster/y-right-down.mp4";
import noBottomRight from "./videos/aster/n-right-down.mp4";

const wasSuccess = () => {
  return Math.random() > 0.5 ? true : false;
};

enum BUTTON_KEYS {
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
export type ChampionsGamePropsType = {};

type TVideoState = Record<
  string,
  React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
>;

const StateMapper: TVideoState = {
  idle: {
    src: idle,
    loop: true,
    autoPlay: true,
  },
  [`${BUTTON_KEYS.TOP_LEFT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesTopLeft,
    loop: false,
  },
  [`${BUTTON_KEYS.TOP_LEFT}_${SHOOT_RESULT.FAIL}`]: {
    src: noTopLeft,
    loop: false,
  },
  [`${BUTTON_KEYS.CENTER}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesCenter,
    loop: false,
  },
  [`${BUTTON_KEYS.CENTER}_${SHOOT_RESULT.FAIL}`]: {
    src: noCenter,
    loop: false,
  },
  [`${BUTTON_KEYS.TOP_RIGHT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesTopRight,
    loop: false,
  },
  [`${BUTTON_KEYS.TOP_RIGHT}_${SHOOT_RESULT.FAIL}`]: {
    src: noTopRight,
    loop: false,
  },
  [`${BUTTON_KEYS.BOTTOM_LEFT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesBottomLeft,
    loop: false,
  },
  [`${BUTTON_KEYS.BOTTOM_LEFT}_${SHOOT_RESULT.FAIL}`]: {
    src: noBottomLeft,
    loop: false,
  },
  [`${BUTTON_KEYS.BOTTOM_RIGHT}_${SHOOT_RESULT.SUCCESS}`]: {
    src: yesBottomRight,
    loop: false,
  },
  [`${BUTTON_KEYS.BOTTOM_RIGHT}_${SHOOT_RESULT.FAIL}`]: {
    src: noBottomRight,
    loop: false,
  },
};

const BoxStyles: SxProps<Theme> = {
  ...centerFlex,
};

const ChampionsGame: React.FC<ChampionsGamePropsType> = () => {
  const [videoState, setVideoState] = useState<
    React.DetailedHTMLProps<
      React.VideoHTMLAttributes<HTMLVideoElement>,
      HTMLVideoElement
    >
  >(StateMapper["idle"]);
  const [buttonsActive, setButtonsActive] = useState(true);

  const onButtonClick = (buttonValue: string) => {
    setButtonsActive(false);
    const goal = wasSuccess();

    console.log(`Target was ${buttonValue} and result was ${goal}`);

    if (goal) {
      setVideoState(StateMapper[`${buttonValue}_${SHOOT_RESULT.SUCCESS}`]);
    } else {
      setVideoState(StateMapper[`${buttonValue}_${SHOOT_RESULT.FAIL}`]);
    }
    setTimeout(() => {
      setVideoState(StateMapper[`idle`]);
      setButtonsActive(true);
    }, 3000);
  };

  // *************** RENDER *************** //
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: 720,
          position: "relative",
          ...centerFlex,
        }}
      >
        <video
          controls={false}
          src={videoState.src ?? idle}
          loop={videoState.loop ?? false}
          muted={videoState.src === idle ? true : false}
          autoPlay
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "auto",
          }}
        ></video>

        <Box
          sx={{
            display: "grid",
            gridTemplateAreas: `
            "topLeft middleTop topRight"
            "centerButton centerButton centerButton"
            "bottomLeft middleBottom bottomRight"
            `,
            gridGap: "5px",
            position: "absolute",
            zIndex: 3,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            visibility: buttonsActive ? undefined : "hidden",
          }}
        >
          <Box
            sx={{
              gridArea: "topLeft",
              ...BoxStyles,
            }}
          >
            <BallButton
              id={BUTTON_KEYS.TOP_LEFT}
              onClick={() => onButtonClick(BUTTON_KEYS.TOP_LEFT)}
            />
          </Box>

          <Box
            sx={{
              gridArea: "topRight",
              ...BoxStyles,
            }}
          >
            <BallButton
              id={BUTTON_KEYS.TOP_RIGHT}
              onClick={() => onButtonClick(BUTTON_KEYS.TOP_RIGHT)}
            />
          </Box>

          <Box
            sx={{
              gridArea: "centerButton",
              ...BoxStyles,
            }}
          >
            <BallButton
              id={BUTTON_KEYS.CENTER}
              onClick={() => onButtonClick(BUTTON_KEYS.CENTER)}
            />
          </Box>

          <Box
            sx={{
              gridArea: "bottomLeft",
              ...BoxStyles,
            }}
          >
            <BallButton
              id={BUTTON_KEYS.BOTTOM_LEFT}
              onClick={() => onButtonClick(BUTTON_KEYS.BOTTOM_LEFT)}
            />
          </Box>
          <Box
            sx={{
              gridArea: "bottomRight",
              ...BoxStyles,
            }}
          >
            <BallButton
              id={BUTTON_KEYS.BOTTOM_RIGHT}
              onClick={() => onButtonClick(BUTTON_KEYS.BOTTOM_RIGHT)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionsGame;
