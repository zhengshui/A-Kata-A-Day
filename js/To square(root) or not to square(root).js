/**
 Description:

 To square(root) or not to square(root)

 Write a method, that will get an integer array as parameter and will process
 every number from this array.
 Return a new array with processing every number of the input-array like this:

 If the number has an integer square root, take this,
 otherwise square the number.
 [4,3,9,7,2,1] -> [2,9,3,49,4,1]
 **/

// my
function squareOrSquareRoot(array) {
    return array.map(function(val) {
        a = Math.sqrt(val);
        if (Math.floor(a) === a) {
            return a;
        } else {
            return Math.pow(val, 2);
        }
    });
}

// top
function squareOrSquareRoot(array) {
    return array.map( x => {
            const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
});
}