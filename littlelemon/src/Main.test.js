import { initializeTimes, updateTimes } from "./App";

test("initializeTimes returns an array with available times", () => {
  const result = initializeTimes();
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
});

test("updateTimes returns same state for unknown action type", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UNKNOWN_ACTION" };
  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});
