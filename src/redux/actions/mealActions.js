import * as types from './actionTypes';
export function createMeal(meals) {
  return { type: types.CREATE_MEAL, meals };
}
