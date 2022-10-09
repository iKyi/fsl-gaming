import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "app/store";
import { API_ACTIONS } from "constants/API_ACTIONS";
import { API_URL } from "constants/general_contants";
import { axiosStrapiGetter } from "lib/axios/axiosGetter";
import axiosInstance from "lib/axios/axiosInstance";
import {
  addBlockingSnackbar,
  removeBlockingSnackbar,
} from "../global/globalSlice";

interface IInitialState {
  shotPrice: number;
  topLeftScoreValue: number;
  topRightScoreValue: number;
  centerValue: number;
  bottomLeftScoreValue: number;
  bottomRightScoreValue: number;
}

const initialState: IInitialState = {
  bottomLeftScoreValue: 0,
  bottomRightScoreValue: 0,
  centerValue: 0,
  shotPrice: 0,
  topLeftScoreValue: 0,
  topRightScoreValue: 0,
};

const championsLeagueSlice = createSlice({
  name: "ChampionsLeagueData",
  initialState: initialState,
  reducers: {
    bindAllData: (state, action: PayloadAction<IInitialState>) => {
      state = action.payload;
    },
  },
});

export const { bindAllData } = championsLeagueSlice.actions;

export const getAndBindAllChampionsLeagueData = (): AppThunk => (dispatch) => {
  dispatch(
    addBlockingSnackbar({
      id: "loading-champions-data",
      state: "loading",
      text: "Loading Champions League Data ...",
    })
  );
  axiosStrapiGetter("champions-league-game-parameters").then((response) => {
    dispatch(bindAllData(response.data.attributes));
    dispatch(removeBlockingSnackbar("loading-champions-data"));
  });
};

export const doChampionsLeagueShot =
  (walletId: string, location: string): AppThunk<Promise<boolean>> =>
  (dispatch) => {
    axiosInstance
      .post(`${API_URL}${API_ACTIONS.CHAMPIONS_DO_SHOT}`, {
        walletId: walletId,
        shotLocation: location,
      })
      .then((result) => {
        console.log(result);
      });
    return Promise.resolve(Math.random() > 0.5 ? true : false);
  };

export const doPurchaseChampionsShots =
  (walletId: string, amount: number): AppThunk<Promise<any>> =>
  (dispatch) => {
    axiosInstance
      .post(`${API_URL}${API_ACTIONS.CHAMPIONS_PURCHASE_SHOT}`, {
        walletId: walletId,
        amount: amount,
      })
      .then((result) => {
        console.log(result);
      });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("triggered purchase for " + amount + " shots");
        resolve(true);
      }, 500);
    });
  };

export default championsLeagueSlice.reducer;
