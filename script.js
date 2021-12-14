//create firstname input tag
var firstName=document.createElement('lable');
firstName.setAttribute('for','fn');
firstName.innerHTML="Firstname:";
var br1=document.createElement('br')
var inpfname=document.createElement('input');
inpfname.setAttribute('type','text');
inpfname.setAttribute('id','fn');
var br2=document.createElement('br')
document.body.append(firstName,br1,inpfname,br2);

//create lastname input tag]
var lastName=document.createElement('lable');
lastName.setAttribute('for','ln');
lastName.innerHTML="Lastname:";
var br1=document.createElement('br')
var inplname=document.createElement('input');
inplname.setAttribute('type','text');
inplname.setAttribute('id','ln');
var br2=document.createElement('br')
document.body.append(lastName,br1,inplname,br2);

//create email tag
var email=document.createElement('lable');
email.setAttribute('for','email');
email.innerHTML="Email:";
var br1=document.createElement('br')
var inpemail=document.createElement('input');
inpemail.setAttribute('type','email');
inpemail.setAttribute('id','email');
var br2=document.createElement('br')
document.body.append(email,br1,inpemail,br2);

//create phone number input tag]
var phno=document.createElement('lable');
phno.setAttribute('for','phno');
phno.innerHTML="Phone No.:";
var br1=document.createElement('br')
var inpphno=document.createElement('input');
inpphno.setAttribute('type','text');
inpphno.setAttribute('id','phno');
var br2=document.createElement('br')
document.body.append(phno,br1,inpphno,br2);

var button=document.createElement('button');
button.setAttribute('onclick','foo()');
button.innerHTML="Submit";
document.body.append(button);

function foo(ele){
    let res1=document.getElementById("fn").value;
    console.log(res1);
    let res2=document.getElementById("ln").value;
    console.log(res2);
    let res3=document.getElementById("email").value;
    console.log(res3);
    let res4=document.getElementById("phno").value;
    console.log(res4);
}

 


//<input type="text" name="" id="main">
  //  <button onclick="foo()">Click me </button>