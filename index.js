function receivesAFunction(am){
    return am();
}
function returnsANamedFunction(){
    return (function sum(){
    return sum
 })
};

function returnsAnAnonymousFunction(){
    return (function(){return 4 + 6 });
}returnsAnAnonymousFunction();