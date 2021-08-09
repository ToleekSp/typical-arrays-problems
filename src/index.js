
exports.min = function min (array) {
  if(array == undefined || !array.length) return 0;
  
  let min = 0;
  
  for(key in array)
  {
	  if(min > array[key])
	  {
		  min = array[key];
	  }
  }
  
  return min;
}

exports.max = function max (array) {
  if(array == undefined || !array.length) return 0;
  
  let max = 0;
  
  for(key in array)
  {
	  if(max < array[key])
	  {
		  max = array[key];
	  }
  }
  
  return max;
}

exports.avg = function avg (array) {
  if(array == undefined || !array.length) return 0;
  
  let avg = 0;
  
  for(key in array)
  {
	avg += array[key];
  }
  
  return avg / array.length;
}
