import { combineReducers } from "@reduxjs/toolkit";
import quizReducer from './slices/quizSilce';

const rootReducer = combineReducers({
    quiz: quizReducer,
});

export default rootReducer;