// add solution here
function theBeatlesPlay(array1, array2){
  let newArray = [];
  for ( let i = 0; i < array1.length; i++){
    newArray.push(array1[i] + " plays " + array2[i]);
  }
  return newArray;
}