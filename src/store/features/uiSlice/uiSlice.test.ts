import { UiState } from "./types";
import {
  setIsLoadingActionCreator,
  uiReducer,
  unsetIsLoadingActionCreator,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it is invoked with the action to setIsLoading", () => {
    test("Then it should return an object with the isLoading property set to true", () => {
      const initialUiState: UiState = {
        isLoading: false,
      };
      const expectedUiState: UiState = {
        isLoading: true,
      };

      const setIsLoadingAction = setIsLoadingActionCreator();
      const newState = uiReducer(initialUiState, setIsLoadingAction);

      expect(newState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it is invoked with the action to unsetIsLoading", () => {
    test("Then it should return an object with the isLoading property set to false", () => {
      const initialUiState: UiState = {
        isLoading: true,
      };
      const expectedUiState: UiState = {
        isLoading: false,
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();
      const newState = uiReducer(initialUiState, unsetIsLoadingAction);

      expect(newState).toStrictEqual(expectedUiState);
    });
  });
});
