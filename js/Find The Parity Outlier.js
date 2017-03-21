/** Description:

    You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single
integer N. Write a method that takes the array as an argument and returns N.

    For example:
    [2, 4, 0, 100, 4, 11, 2602, 36]
    Should return: 11

    [160, 3, 1719, 19, 11, 13, -21]
    Should return: 160
 **/

function findOutlier(integers){
    var a =[],b =[];
    integers.map(function(val){
        val % 2 === 0 ? a.push(val) : b.push(val);
    });
    return a.length === 1 ? a[0] : b[0]
}

// other
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}