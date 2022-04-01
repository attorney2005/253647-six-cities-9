import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constant';
import {userProcess} from './user-process/user-process';
import {data} from './data/data';


export const rootReducer = combineReducers({
  [NameSpace.data]: data.reducer,
  [NameSpace.user]: userProcess.reducer,
});
