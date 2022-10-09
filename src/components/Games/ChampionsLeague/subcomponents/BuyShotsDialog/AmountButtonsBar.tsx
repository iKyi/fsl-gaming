import { Add, Remove } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { FONTS } from "lib/theme";
import { Dispatch, SetStateAction } from "react";
import { centerFlex } from "utils/sxUtils";

const borderStyles = {
  border: `2px solid`,
  borderImageSlice: 1,
  borderImageSource: `linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)`,
  "&:disabled": {
    borderImageSource: `linear-gradient(123.49deg, gray 8.63%, gray 25.73%, gray 42.83%, gray 62.96%)`,
  },
};

const buttonStyles = {
  borderRadius: 0,
  background: `linear-gradient(115.7deg, rgba(176, 72, 253, 0.1) 10.28%, rgba(98, 22, 210, 0.1) 24.23%, rgba(62, 78, 204, 0.1) 38.19%, rgba(62, 117, 213, 0.1) 54.61%);`,
  ...borderStyles,
};

interface IAmountButtonsBar {
  currentAmount: number;
  maxAmount: number;
  setCurrentAmount: Dispatch<SetStateAction<number>>;
}
const AmountButtonsBar: React.FC<IAmountButtonsBar> = ({
  currentAmount,
  maxAmount,
  setCurrentAmount,
}) => {
  const incrementAmount = () => {
    const newAmount = currentAmount + 1;
    setCurrentAmount(newAmount);
  };
  const decrementAmount = () => {
    const newAmount = currentAmount - 1;
    setCurrentAmount(newAmount);
  };

  return (
    <Box
      sx={{
        ...centerFlex,
        userSelect: "none",
      }}
    >
      <IconButton
        sx={{
          ...buttonStyles,
          mr: 2,
        }}
        onClick={decrementAmount}
        disabled={currentAmount === 0}
      >
        <Remove />
      </IconButton>
      <Box
        sx={{
          ...borderStyles,
          height: 44,
          ...centerFlex,
          px: 2,

          fontFamily: FONTS.MOKOTOONE,
        }}
      >
        {currentAmount} shots
      </Box>
      <IconButton
        sx={{
          ...buttonStyles,
          ml: 2,
        }}
        onClick={incrementAmount}
        disabled={currentAmount === maxAmount}
      >
        <Add />
      </IconButton>
    </Box>
  );
};

export default AmountButtonsBar;
