import { Box, Button, styled } from "@mui/material";

const GriddedButton = styled(Button)(() => {
  return {
    border: "1px solid red",
  };
});

export type ChampionsGamePropsType = {};

const ChampionsGame: React.FC<ChampionsGamePropsType> = () => {
  const onButtonClick = (buttonValue: string) => {
    console.log(buttonValue);
  };

  // *************** RENDER *************** //
  return (
    <Box>
      <Box
        sx={{
          width: 720,
          height: 580,
          position: "relative",
        }}
      >
        <video
          src={undefined}
          loop={false}
          autoPlay
          controls={false}
          style={{
            position: "relative",
            zIndex: 2,
          }}
        ></video>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "5px",
            position: "absolute",
            zIndex: 3,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <GriddedButton onClick={() => onButtonClick("topLeftButton")} />
          <GriddedButton onClick={() => onButtonClick("topButton")} />
          <GriddedButton onClick={() => onButtonClick("topRightButton")} />
          <GriddedButton onClick={() => onButtonClick("centerButton")} />
          <GriddedButton onClick={() => onButtonClick("bottomLeftButton")} />
          <GriddedButton onClick={() => onButtonClick("bottomButton")} />
          <GriddedButton onClick={() => onButtonClick("bottomRightButton")} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionsGame;
