import * as types from '../constants/action_types';

export function nextMonth() {
  return {
    type: types.NEXT_MONTH
  }
}

export function previousMonth() {
  return {
    type: types.PREVIOUS_MONTH
  }
}

