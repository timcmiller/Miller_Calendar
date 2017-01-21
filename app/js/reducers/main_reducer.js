import * as types from './../constants/action_types';
import buildCalendarArray from './../lib/calendar_maker';
import getMonthText from './../lib/get_month_text';

const initialState = {
  month: new Date().getMonth(),
  monthText: getMonthText(new Date().getMonth()),
  year: new Date().getFullYear(),
  calendar: buildCalendarArray()
};

export default function(state = initialState, action) {

  switch(action.type) {

    case 'NEXT_MONTH':
      return {
        ...state,
        calendar: buildCalendarArray(state.month === 11 ? 0 : state.month + 1, state.month === 11 ? state.year + 1 : state.year),
        month: state.month === 11 ? 0 : state.month + 1,
        year: state.month === 11 ? state.year + 1 : state.year,
        monthText: getMonthText(state.month === 11 ? 0 : state.month + 1)
      }

    case 'PREVIOUS_MONTH':
      return {
        ...state,
        calendar: buildCalendarArray(state.month === 0 ? 11 : state.month - 1, state.month === 0 ? state.year -1 : state.year),
        month: state.month === 0 ? 11 : state.month - 1,
        year: state.month === 0 ? state.year - 1 : state.year,
        monthText: getMonthText(state.month === 0 ? 11 : state.month - 1)
      }

    default:
      return state;
  }
}
