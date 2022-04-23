function isEven ( num ) { return ( num %2 == 0) ; }
function find_recursive (arr , f){
    return  arr.filter(number => {return f(number);});
}
result = find_recursive ([1 , 3, 5, 4, 2] , isEven );
console .log (" resuld find_recursive :", result ); // [4 , 2]