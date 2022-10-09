import { Box, CardActionArea, Snackbar, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "app/hooks";
import useMobile from "hooks/useMobile";
import { AnimatePresence, motion } from "framer-motion";
import { closeSnackbar } from "features/global/globalSlice";

export type SnackbarProviderPropsType = {};

const SnackbarProvider: React.VFC<SnackbarProviderPropsType> = () => {
  // const fillerItems: ISmallSnackbar[] = [
  //   {
  //     content: " lala",
  //     id: "lala1",
  //     variant: "success",
  //   },
  //   {
  //     content: " lala",
  //     id: "lala1",
  //     variant: "info",
  //   },
  //   {
  //     content: " lala",
  //     id: "lala1",
  //     variant: "error",
  //   },
  // ];

  const dispatch = useAppDispatch();
  const { snackBars } = useAppSelector((state) => state.global);
  const snackbarVisible = snackBars.length > 0;
  const mobile = useMobile();

  // *************** RENDER *************** //
  return (
    <Snackbar
      open={snackbarVisible}
      sx={{ mx: "auto" }}
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      TransitionComponent={undefined}
    >
      <Box>
        <AnimatePresence>
          {snackBars.map((entry) => {
            const errorState = entry.variant === "error";
            return (
              <motion.div
                key={entry.id}
                initial={{
                  translateY: "50%",
                  opacity: 0.5,
                }}
                animate={{
                  translateY: "0%",
                  opacity: 1,
                }}
                exit={{
                  translateY: "50%",
                  opacity: 0.5,
                }}
                transition={{ duration: 1 }}
                style={{
                  marginBottom: "10px",
                }}
              >
                <CardActionArea
                  onClick={() => dispatch(closeSnackbar(entry.id))}
                  sx={{
                    border: `2px solid`,
                    borderImageSlice: 1,
                    borderImageSource: `linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)`,
                    borderRadius: 0,
                    bgcolor: `rgba(0,0,0,0.85)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: errorState ? "error.main" : "primary.main",
                    fontSize: "1.1rem",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: 1.3,
                    px: mobile ? 2 : 5,
                    py: 2,
                    width: "auto",
                    maxWidth: "100%",
                    textShadow: "1px 1px 1px black",
                    fontWeight: 700,
                  }}
                >
                  <Stack>
                    <Box>{entry.content}</Box>
                  </Stack>
                </CardActionArea>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Box>
    </Snackbar>
  );
};

export default SnackbarProvider;
