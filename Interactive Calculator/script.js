
function Sum(){
    var x = Number(document.getElementById("num1").value);
	var y = Number(document.getElementById("num2").value);
	var z = 0;
    z=x+y;
    document.getElementById("res").innerHTML = " Result : "+ String(z); 




}
function Subtract(){
    var x = Number(document.getElementById("num1").value);
	var y = Number(document.getElementById("num2").value);
	var z = 0;
    z=x-y;
    document.getElementById("res").innerHTML = " Result : "+ String(z); 




}
function multiply(){
    var x = Number(document.getElementById("num1").value);
	var y = Number(document.getElementById("num2").value);
	var z = 0;
    z=x*y;
    document.getElementById("res").innerHTML = " Result : "+ String(z); 




}
function divide(){
    var x = Number(document.getElementById("num1").value);
	var y = Number(document.getElementById("num2").value);
	var z = 0;
    z=x/y;
    document.getElementById("res").innerHTML = " Result : "+ String(z); 




}



