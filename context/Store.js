import { createContext, useReducer, useContext } from 'react';

const StoreContext = createContext();

export const initialState = {
  user: null,
  mealPlan: null,
  workoutPlan: null,
};

export const actionType = {
  SET_USER: 'SET_USER',
  SET_MEAL_PLAN: 'SET_MEAL_PLAN',
  SET_WORKOUT_PLAN: 'SET_WORKOUT_PLAN',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return { ...state, user: action.user };
    case actionType.SET_MEAL_PLAN:
      return { ...state, mealPlan: action.mealPlan };
    case actionType.SET_WORKOUT_PLAN:
      return { ...state, workoutPlan: action.workoutPlan };

    default:
      return state;
  }
};

export function StoreProvider({ children, reducer, initialState }) {
  return (
    <StoreContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStateValue = () => useContext(StoreContext);
