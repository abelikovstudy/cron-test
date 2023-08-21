import {days, months } from './constants'
const checkTimespan = (input, lowerBound = 0, upperBound) => {
    if(!isNaN(input)){
      let num = parseInt(input)
      if(num >= lowerBound && num <= upperBound){
        return true;
      }
      return false;
    }
    return false;
  }  

const checkDatespan = (input, dateType) => {
  if(dateType.includes(input)){
    return true;
  }
  return false;
}
  
export function verifyValue(input, type){
    switch(type){
      case 0:
        return checkTimespan(input, 0, 59)
      case 1:
        return checkTimespan(input, 0, 23)
      case 2:
        return checkTimespan(input, 1, 31)
      case 3:
        return checkDatespan(input, days)
      case 4:
        return checkDatespan(input, months)
      default:
        return false
    }
  
}
