const getPostfix = (i) => {
  if( i >= 10 && i <= 20 ) return 'th'
  switch(i % 10){
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}

export const daysofweek = Array.from([ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday' ], (el) => (
    {
      value : el.toUpperCase().slice(0,3),
      label : el
    }))
export const months = Array.from([ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ], (el) => (
    {
      value : el.toUpperCase().slice(0,3),
      label : el      
    }))

export const minutes = Array.from({ length: 60 } , (x,i) => (
    {
      value : i,
      label : `${i + 1}${getPostfix(i + 1)} minute`
    }))

export const hours = Array.from({ length: 24 } , (x,i) => (
    {
      value : i,
      label : `${i}:00`
    }))
export const days = Array.from({ length: 31  } , (x,i) => (
  {
    value : i,
    label : `${i + 1}${getPostfix(i + 1)}`
  }))
