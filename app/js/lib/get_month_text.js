var getMonthText = (month) => {

  var monthText;

  switch(month) {
    case 0:
      monthText = "January";
      break;
    case 1:
      monthText = "Febuary";
      break;
    case 2:
      monthText = "March";
      break;
    case 3:
      monthText = "April";
      break;
    case 4:
      monthText = "May";
      break;
    case 5:
      monthText = "June";
      break;
    case 6:
      monthText = "July";
      break;
    case 7:
      monthText = "August";
      break;
    case 8:
      monthText = "September";
      break;
    case 9:
      monthText = "October";
      break;
    case 10:
      monthText = "November";
      break;
    case 11:
      monthText = "December";
      break;
  }

  return monthText;
}

export default getMonthText;
