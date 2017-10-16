var key ="pen";
var value = "blue";

window.localStorage.setItem(key,value);

alert(key + " is " + value);



var value= window.localStorage.getItem(key);

alert(key + " is " + value);