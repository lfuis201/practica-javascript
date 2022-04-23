function square (x) { return (x*x); }
function double (x) { return (x*2) ; }

compose = (f1, f2) => value => f1( f2(value) );

var f3 = compose ( square , double ) ;
var f4 = compose ( double , square ) ;
console .log ("f3 (5) :", f3 (5) ); // 100
console .log ("f4 (5) :", f4 (5) ) ; // 50
console .log ("f3 (10) :", f3 (10) ); // 400
console .log ("f4 (10) :", f4 (10) ); // 200