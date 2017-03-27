/** Description:

    Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
    the longest possible,containing distinct letters, - each taken only once - coming from s1 or s2./
 **/
// 把两个只包含字母的字符串合并，需要去除重复的字母而且按a-z的顺序输出。
// 时间不合格。
function unique(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i-1]) {
      arr.slice(i--, 1);
    }
  }
  return arr;
}
function longest(s1, s2) {
    var s3 = s1 + s2;
    return unique(s3.split('').sort()).join('');
}

// 别人：
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

// 参考：
function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}


