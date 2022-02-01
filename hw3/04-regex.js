function validateEmail ()
{
  var emailAddress = document.getElementById("input").value;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return document.getElementById("result").innerHTML= "<span style='color: green;'>'Thank you, This is valid email address' </span>"; 
  } else {
    return document.getElementById("result").innerHTML= "<span style='color: red;'>'Error: Please enter valid email address' </span>";
  }
}