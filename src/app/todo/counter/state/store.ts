import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { counterFeatureName, counterReducer } from "./counters/counter.reducer";

interface RootState {}

export const rootReducer: ActionReducerMap <RootState> = {
    [counterFeatureName]: counterReducer,
};