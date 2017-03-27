/**
 * Description:

 Given: an array containing hashes of names

 Return: a string formatted as a list of names separated by commas
 except for the last two names, which should be separated by an ampersand.

 Example:

 list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
 // returns 'Bart, Lisa & Maggie'

 list([ {name: 'Bart'}, {name: 'Lisa'} ])
 // returns 'Bart & Lisa'

 list([ {name: 'Bart'} ])
 // returns 'Bart'

 list([])
 // returns ''
 */

// my:

function list(names){
    var b ='',
        len = names.length;
    if(len === 0) {
        return '';
    } else if (len === 1) {
        return names[0].name;
    } else if (len === 2) {
        return names[0].name + ' & ' +names[1].name ;
    } else {
        return a(names);
    }

    // function a (names) {
    //     for (var i = 0 ; i < len-2; i++) {
    //         b.push(names[i].name + ', ');
    //     }
    //     b.push(names[len-2].name + ' & '+names[len-1].name);
    //     return b.join('');
    // }
    // change
    function a(names) {
        for (var i = 0; i < len -2; i++) {
            b += names[i].name + ', ';
        }
        return b + names[len - 2].name + ' & '+names[len-1].name;
    }
}

// practices
function list(names){
    return names.reduce(function(prev, current, index, array){
        if (index === 0){
            return current.name;
        }
        else if (index === array.length - 1){
            return prev + ' & ' + current.name;
        }
        else {
            return prev + ', ' + current.name;
        }
    }, '');
}

// clever
function list(names) {
    var xs = names.map(p => p.name);
    var x = xs.pop();
    return xs.length ? xs.join(", ") + " & " + x : x || "";
}