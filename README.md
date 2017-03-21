# A-Kata-A-Day
Learn programming and algorithms in codewars


### 一. 8kyu to 7kyu

```
1.一个数组，能开方开方，不能则平方输出
function squareOrSquareRoot(array) {
  return array.map(function(val) {
    var a = Math.sqrt(val);
    if (Math.floor(a) === a){
      return a
    } else {
      return Math.pow(val, 2)
    }
  });
}
```

```
别人的：（es6, 相对简洁）
function squareOrSquareRoot(array) {
  return array.map(x => {
    const n = Math.sqrt(x)
    return Number.isInteger(n) ? n : x * x
  })
}

```

```

2. 把两个只包含字母的字符串合并，需要去除重复的字母而且按a-z的顺序输出。
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
  return unique(s3.split("").sort()).join("");
}

别人：
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

参考：
function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

```
```

3. 给一组数组，输出其中元素的最长长度值。
function longest(words) {
for (var i = 1; i < words.length - 1; i++) {
  if (words[i].length >= words[i-1].length) {
    words.slice(i-1, 1);
  } else {
    words.slice(i, 1);
  }
  i--;
}
  return words[0].length; //code here
}

```
```
4.给一组数字数组（最少3个元素），找出其中的异数（奇偶）
function findOutlier(integers){
var a =[],b =[];
  integers.map(function(val){
    val%2 === 0?a.push(val):b.push(val);
  });
  return a.length===1?a[0]:b[0]
}

```

