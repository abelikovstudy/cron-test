const days = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI' , 'SAT'
  ];
const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

const checkMinute = (input) => {
    if(!isNaN(input)){
      let num = parseInt(input)
      if(num >= 0 && num <= 59){
        return true;
      }
      return false;
    }
    return false;
  }
  
const checkHour = (input) => {
    if(!isNaN(input)){
      let num = parseInt(input)
      if(num >= 0 && num <= 23){
        return true;
      }
      return false;
    }
    return false;
}
  
const checkDay = (input) => {
    if(!isNaN(input)){
      let num = parseInt(input)
      if(num >= 1 && num <= 31){
        return true;
      }
      return false;
    }
    return false;
}
  
const checkDayOfWeek = (input) => {
    if(days.includes(input)){
      return true;
    }
    return false;
}
  
const checkMonths = (input) => {
    if(months.includes(input)){
      return true;
    }
    return false;
}
  
export function checkValue(input, type){
    switch(type){
      case 0:
        return checkMinute(input)
      case 1:
        return checkHour(input)
      case 2:
        return checkDay(input)
      case 3:
        return checkDayOfWeek(input)
      case 4:
        return checkMonths(input)
      default:
        return false
    }
  
}

