import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import newsSlice from "./slices/newSlice";

const combinedReducer = combineReducers({
  news: newsSlice,
});

const rootReducer = (
  state: ReturnType<typeof combinedReducer> | undefined,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: any
) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducer(state, action);
  }
};

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof combinedReducer>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore);
