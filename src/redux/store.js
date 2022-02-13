import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

export default configureStore({
  reducer: rootReducer,
  middleware: [logger]
});
