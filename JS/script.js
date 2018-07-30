// var todos = [];
// window.setInterval(function() {}, 2000);
// var input = prompt("What would you like to do?");
//
// function addItem() {
//     var newInput = prompt("Enter new todo here:")
//     todos.push(newInput);
//     console.log(todos);
// }
//
// function deleteItem() {
//     var index = prompt("Which item?");
//     todos.splice(index - 1, 1);
// }
//
// function showList() {
//     console.log("*****************");
//     todos.forEach(function(todos, i)
//     {
//         console.log(i + 1 + ': ' + todos);
//     });
//     console.log("*****************");
// }
//
// function todoList() {
//     while(input !== 'quit') {
//         if(input === 'list') {
//             showList();
//         } else if (input === 'new') {
//             addItem();
//         } else if (input === 'delete') {
//             deleteItem();
//         }
//         input = prompt("What would you like to do?");
//     }
//     console.log('Ok, you quit the app.');
// }
//
// todoList();

var list1 = [1, 2, 3, 4, 5, 6];
var list2 = ['a', 'b', 'c', 'd', 'e', 'f'];
function printReverse1(arr) {
    for(var i = arr.length - 1; i >= 0; i-- ) {
        console.log(arr[i]);
    }
}
// works only with int
function printReverse2(arr) {
    var reversedArr = arr.sort(function (a, b) {
        return b - a;
    });
    return reversedArr;
}

function isUniform1(arr) {
    var firstEl = arr[0];
    var newArr = arr.filter(function (item) {
        return item === firstEl;
    });
    return (arr.length === newArr.length)
}

function isUniform2(arr) {
    var first = arr[0];
    for(var i = 1; i <= arr.length; i++) {
        if(arr[i] !== first) {
            return false;
        }
    }
    return true;
}


function sumArray(arr) {
    var sum = 0;
    arr.forEach(function (n) {
        sum += n;
    });
    return sum;
}


// next 2 funcs work only for numbers
// function max(arr) {
//     return Math.max.apply( ...arr);
// }

// function max(arr) {
//     return arr.reduce(function (a, b) {
//         return Math.max(a, b);
//     });
// }

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// function max(arr) {
//     var arrSorted = arr.sort(function (a, b) {
//         return a-b;
//     });
//     var max = arrSorted.pop();
//     return max;
// }

// myForEach()

// function myForEach(arr, func) {
//     // loop through array
//     for (var i = 0; i < arr.length; i++) {
//         // call function to each item in array
//         func(arr[i]);
//     }
// }
//
// function oddEven(item) {
//     if (item % 2 === 0) {
//         console.log(item + ' is even');
//     } else
//         return console.log(item + ' is odd');
// }


var movies = [
    {
        name: "Die Heard",
        rating: "8",
        hasWatched: true
    },
    {
        name: "Mission Impossible",
        rating: "7",
        hasWatched: false
    },
    {
        name: "Sherlock Holmes",
        rating: "9",
        hasWatched: true
    }
]
function moviesChecker(item) {
    var result = 'You have ';
    if (item.hasWatched) {
        result += 'watched ';
    } else {
        result += 'not seen ';
    }
    result += "\"" + item.name + "\" - ";
    result += item.rating  + ' stars.'
    return result;
}

