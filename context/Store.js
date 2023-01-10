import { createContext, useReducer } from 'react';

const StoreContext = createContext();

const initialState = {
  user: null,
};

export const actionType = {
  SET_USER: 'SET_USER',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return { ...state, user: action.user };

    default:
      return state;
  }
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export default StoreContext;
