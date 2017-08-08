// 数组去重
// export function unique (array) {
// var n = []; //一个新的临时数组
//   //遍历当前数组
//   for(var i = 0; i < array.length; i++){
//     //如果当前数组的第i已经保存进了临时数组，那么跳过，
//     //否则把当前项push到临时数组里面
//     if (n.indexOf(array[i]) == -1) n.push(array[i]);
//   }
//   return n;
// }

// 数组中对象去重
export function unique (arr) {
  var unique = {};
  arr.forEach(function(a){ unique[ JSON.stringify(a) ] = 1 });
  arr= Object.keys(unique).map(function(u){return JSON.parse(u) });
  return arr
}
