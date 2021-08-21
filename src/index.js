
exports.min = function min (array) {
  if (array===undefined||array.length<1) {
    return 0;
  }
  let min=array[0];
  for (let index = 0; index < array.length; index++) {
    if(min>array[index]) {min=array[index]}
    
  }
  return min;
}

exports.max = function max (array) {
  if (array===undefined||array.length<1) {
    return 0;
  }
  let max=array[0];
  for (let index = 0; index < array.length; index++) {
    if(max<array[index]) {max=array[index]}
    
  }
  return max;
  
}

exports.avg = function avg (array) {
  if (array===undefined||array.length<1) {
    return 0;
  }
  let sum=0;
  let avg;
  for (let index = 0; index < array.length; index++) {
    sum+=array[index];
    
  }
  avg= sum/(array.length)
  return avg;
 
}
