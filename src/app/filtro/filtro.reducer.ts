import { Action, createReducer, on } from '@ngrx/store';
import { setFilter, validFilters } from './filtro.actions';

export const initialState: validFilters = 'All';

export const filterReducer = createReducer<validFilters,Action>(
  initialState,
  on(setFilter, (state: validFilters, props) => props.filter)

);