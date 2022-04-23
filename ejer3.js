function isEven ( num ) { return ( num %2 == 0) ; }
function find ( arr , f ){
    return  arr.filter(number => {return f(number);});
}
isEven (3) // false
isEven (4) // true
result = find ([1 , 3, 5, 4, 2] , isEven );
console .log (" find result :", result ); // [4 , 2]