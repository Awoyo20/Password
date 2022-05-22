function CheckPassword(inputtxt) 
{ 
var passw=  Awoyo(20);
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}

console.log(passw)
}