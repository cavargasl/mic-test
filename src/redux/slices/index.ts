import { combineReducers } from '@reduxjs/toolkit';

import { default as cart } from './cart';

const rootReducer = combineReducers({
  cart,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;