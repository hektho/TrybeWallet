import userReducer from './userReducer';
import walletReducer from './walletReducer';
import buttonsReducer from './buttonsReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({ userReducer, walletReducer, buttonsReducer });

export default rootReducer;