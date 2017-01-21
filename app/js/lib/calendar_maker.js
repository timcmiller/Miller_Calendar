var buildCalendarArray = (month, year) => {
  const d = new Date();
  month = month || d.getMonth();
  year = year || d.getFullYear();
  var FirstDayofMonth = new Date(year, month);
  var DayofFirstWeek = FirstDayofMonth.getDay();
  var LastDayofMonth = _daysInMonth(month, year);
  var LastDayofLastMonth = _daysInMonth(month - 1, year)
  var CalendarLength = (Math.ceil((DayofFirstWeek + LastDayofMonth)/ 7) * 7);


  var month = [];
  var week = [];
  var newMonth = 1;
  var currentMonth = 1;

  for(var i = 0; i < CalendarLength; i++) {
    if(!month.length && DayofFirstWeek) {
      week.push(LastDayofLastMonth - DayofFirstWeek + 1);
      DayofFirstWeek--;
    } else if(currentMonth <= LastDayofMonth){
      week.push(currentMonth);
      currentMonth++;
    } else {
      week.push(newMonth);
      newMonth++;
    }

    if(week.length === 7) {
      month.push(week);
      week = [];
    }
  }
  return month;
}

var _daysInMonth = (month, year) => {
  if(month === -1) {
    month = 10;
  }
  return new Date(year, month + 1, 0).getDate();
}

export default buildCalendarArray;
