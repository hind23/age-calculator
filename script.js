
var elements=document.querySelectorAll('input');
var errors=document.querySelectorAll('.error');  
 var label=document.querySelectorAll('label');

let red=(e)=>
{
 elements[e].style.borderColor='hsl(0, 100%, 67%)';
label[e].style.color='hsl(0, 100%, 67%)';  
}
let remove_red=(e)=>
{
elements[e].style.borderColor='hsl(0, 1%, 44%)';
label[e].style.color='hsl(0, 1%, 44%)';  
}
let required=()=>
{
  if(elements[0].value=='')
{
    errors[0].textContent='this field is required';
    red(0); 
}
else 
{
    errors[0].textContent='              ';
   remove_red(0);
}
if(elements[1].value=='')
{
    errors[1].textContent='this field is required';
    red(1);
}
else 
{
    errors[1].textContent='               ';
   remove_red(1);
}
if(elements[2].value=='')
{
    errors[2].textContent='this field is required';
    red(2);
}
else 
{
    errors[2].textContent='                 ';
   remove_red(2);
}
 
}
document.querySelector('button').addEventListener('click',()=>
{
     required(); 
     if ( 1<=parseInt(elements[0].value)<=31 && month(parseInt(elements[1].value)) && parseInt(elements[2].value)<= new Date().getFullYear())
{
let day = elements[0].value;
        let month = elements[1].value;
        let year = elements[2].value;
   let specificDate  = new Date(year+'\''+month+'\''+day);
  let currentDate  = new Date();
  var yearsDiff = currentDate.getFullYear() - specificDate.getFullYear();

var monthsDiff = currentDate.getMonth() - specificDate.getMonth();

if (monthsDiff <= 0) {
  yearsDiff--;
  monthsDiff += 12;
}

var daysDiff = currentDate.getDate() - specificDate.getDate();

if (daysDiff < 0) {
  monthsDiff--;
  var daysInLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  daysDiff += daysInLastMonth;
}
let h1 = document.querySelectorAll('h1');
console.log("Difference: " + yearsDiff + " years, " + monthsDiff + " months, " + daysDiff + " days");
h1[0].textContent=yearsDiff.toString();
h1[1].textContent=monthsDiff.toString();
h1[2].textContent=daysDiff.toString();
}
else 
{

}
})

let month = (number)=>
{
   var Mymap= new Map();
   Mymap=new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
  ]);
  if (Mymap.has(number))
  {
   return true ;
  }
  else return false ;
}