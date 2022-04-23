square = x => x*x;
function mymap_recursive (arr , f){
    return arr.map(x => f(x));
}
result1 = mymap_recursive ([1 , 2, 3 , 4 , 5] , square );
result2 = mymap_recursive ([1 , 4, 9 , 16 , 25] , Math . sqrt );
console .log (" mymap_recursive result1 :", result1 ); // [1 , 4, 9, 16 , 25]
console .log (" mymap_recursive result2 :", result2 ); // [1 , 2, 3, 4, 5]