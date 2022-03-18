import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/offer';
import {SortType} from '../constant';

export const changeCity = createAction<City>('main/changeCity');
export const changeSortType = createAction<SortType>('main/changeSortType');
