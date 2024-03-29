import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeOptions,
} from "@mui/material";
import { Theme, ThemeProvider } from "@mui/system";
import React, { createContext, ReactNode, useMemo, useState } from "react";
import { mainDarkBackground, PerseusColorsGetter } from "./pallette";
import PrimaryFslButton from "assets/images/buttons/primary.png";
import InfoFslButton from "assets/images/buttons/info.png";
import lightBlueFslButton from "assets/images/buttons/lightBlue.png";
import smallBlueButton from "assets/images/buttons/smallBlueButton.png";

export enum FONTS {
  LATO = "Lato, sans-serif, Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  MOKOTO = "MokotoMark2, sans-serif, Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  MOKOTOONE = "Mokoto, sans-serif, Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    fsl: true;
  }
}

let ImmortalMuITheme = createTheme({
  typography: {
    fontFamily: FONTS.LATO,
    h1: {
      fontFamily: FONTS.LATO,
    },
    h2: {
      fontFamily: FONTS.LATO,
    },
    h3: {
      fontFamily: FONTS.LATO,
    },
    h4: {
      fontFamily: FONTS.LATO,
    },
    h5: {
      fontFamily: FONTS.LATO,
    },
    h6: {
      fontFamily: FONTS.LATO,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

// const gradientValuesBorder = {
//   // border: "1px solid transparent",
//   borderImageSlice: 1,
//   borderImageSource:
//     "linear-gradient(103.91deg, #8F3CDD 21.01%, rgba(48, 129, 237, 0.8) 100%)",
// };

const getOverRides = (theme: Theme) => {
  const ThemeObj: Partial<ThemeOptions> = {
    components: {
      MuiOutlinedInput: {
        variants: [
          {
            props: {
              color: "primary",
            },
            style: {
              "&.MuiOutlinedInput-root.Mui-focused": {
                "& > fieldset": {
                  border: "1px solid",
                  borderImageSlice: 1,
                  borderImageSource:
                    "linear-gradient(103.91deg, #8F3CDD 21.01%, rgba(48, 129, 237, 0.8) 100%)",
                },
              },
            },
          },
        ],
      },
      MuiButtonGroup: {
        styleOverrides: {
          root: {
            button: {
              fontSize: "1.05rem",
              "&:first-of-type": {
                clipPath:
                  "polygon(1px 1px, calc(0% + 10px) 1px, calc(100% - 2px) 1px, calc(100% - 2px) calc(100% - 1px),calc(0% + 10px) calc(100% - 1px), 1px calc(100% - 10px))",
              },
              clipPath:
                "polygon(1px 1px, calc(100% - 1px) 1px, calc(100% - 1px) calc(100% - 1px), 1px calc(100% - 1px))",
              "&:last-of-type": {
                clipPath:
                  "polygon(2px 1px, calc(100% - 10px) 1px, calc(100% - 1px) calc(0% + 10px), calc(100% - 1px) calc(100% - 10px), calc(100% - 1px) calc(100% - 1px), 2px calc(100% - 1px));",
              },
            },
          },
        },
      },
      MuiChip: {
        variants: [],
      },
      MuiButton: {
        variants: [
          {
            props: { variant: "outlined", color: "primary" },
            style: {
              color: theme.palette.primary.contrastText,
            },
          },
          {
            props: { variant: "outlined", color: "secondary" },
            style: {
              color: theme.palette.primary.contrastText,
            },
          },
          {
            props: { variant: "fsl", color: "primary" },
            style: {
              fontWeight: 400,
              fontFamily: FONTS.MOKOTO,
              background: `url('${PrimaryFslButton}')`,
              backgroundSize: "100% 100%",
              color: "#fff",
              backgroundRepeat: "no-repeat",
              padding: "20px 25px 20px 25px",
              width: "240px",
              maxWidth: "100%",

              "&:hover": {
                color: "rgba(176, 72, 253, 1)",
              },
            },
          },
          {
            props: { variant: "fsl", color: "info" },
            style: {
              padding: "20px 25px 20px 25px",
              width: "240px",
              maxWidth: "100%",
              fontWeight: 400,
              background: `url('${InfoFslButton}')`,
              fontFamily: FONTS.MOKOTO,
              color: "#fff",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",

              "&:hover": {
                color: "rgba(255, 182, 41, 1)",
              },
            },
          },
          {
            props: { variant: "fsl", color: "secondary" },
            style: {
              padding: "20px 25px 20px 25px",
              width: "240px",
              maxWidth: "100%",
              fontWeight: 400,
              background: `url('${lightBlueFslButton}')`,
              fontFamily: FONTS.MOKOTO,
              color: "#fff",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",

              "&:hover": {
                color: "rgba(255, 182, 41, 1)",
              },
            },
          },
          {
            props: { variant: "fsl", color: "secondary", size: "small" },
            style: {
              padding: "17px 25px 17px 25px",
              maxWidth: "100%",
              fontWeight: 400,
              background: `url('${smallBlueButton}')`,
              fontFamily: FONTS.MOKOTOONE,
              color: "#fff",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              width: "auto",
              "&:hover": {
                color: "rgba(255, 182, 41, 1)",
              },
            },
          }, // {
          //   props: { variant: "angled", color: "primary" },
          //   style: {
          //     paddingTop: theme.spacing(1.5),
          //     color: theme.palette.common.white,
          //     "&:hover": {
          //       backgroundColor: "transparent",
          //     },
          //   },
          // },
        ],
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: "600",
            fontFamily: FONTS.LATO,
            lineHeight: 1,
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(1px)",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: mainDarkBackground,
          },
          html: {
            height: "100%",
          },
          "& #root": {
            position: "relative",
            zIndex: 2,
            flex: "1",
            display: "flex",
            flexDirection: "column",
          },
          p: {
            margin: 0,
          },
          ".TP": {
            color: theme.palette.primary.main,
          },
          ".TS": {
            color: theme.palette.secondary.main,
          },
          ".TW": {
            color: theme.palette.common.white,
          },
          ".TE": {
            color: theme.palette.error.main,
          },
          h1: {
            fontFamily: FONTS.LATO,
          },
          h2: {
            fontFamily: FONTS.LATO,
          },
          h3: {
            fontFamily: FONTS.LATO,
          },
          h4: {
            fontFamily: FONTS.LATO,
          },
          h5: {
            fontFamily: FONTS.LATO,
          },
          h6: {
            fontFamily: FONTS.LATO,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderColor: theme.palette.secondary.main,
            paddingTop: "6px",
            paddingBottom: "6px",
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:last-of-type": {
              td: {
                borderColor: "transparent",
              },
            },
          },
        },
      },
    },
  };
  return ThemeObj;
};

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const PerseusThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => {
    const palette = PerseusColorsGetter(mode);
    const themeObj = { ...ImmortalMuITheme, ...palette };
    return createTheme(themeObj, getOverRides(themeObj));
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default PerseusThemeProvider;
