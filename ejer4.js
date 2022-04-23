square = x => x*x;
function mymap (arr , f){
    return arr.map(x => f(x));
}
console.log (square(5));
result1 = mymap([1 , 2 , 3 , 4, 5] , square );
result2 = mymap([1 , 4 , 9 , 16 , 25] , Math.sqrt );
console.log(" result1 :", result1 ); // [1 , 4, 9, 16 , 25]
console.log(" result2 :", result2 ); // [1 , 2, 3, 4, 5]


