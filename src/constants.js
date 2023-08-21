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

export const daysofweek = [
    'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI' , 'SAT'
  ];
export const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
  ];

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
