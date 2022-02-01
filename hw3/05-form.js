
console.log("======Form Submission======");

console.group("Name");
console.group("Email");

let input = document.getElementById('name');
let input1 = document.getElementById('email');
let copy = document.getElementById('bt1');
copy.addEventListener('click', handleclick);

function handleclick(event){
  console.log("");
  console.log("Name:");
  console.log(input.value);
  console.log("Email:");
  console.log(input1.value);
}

console.group("Comments");

let input3 = document.getElementById('comments');
let feedback = document.getElementById('bt1');
feedback.addEventListener('click', handlefeedback);

function handlefeedback(event){
  console.log("Feedback:");
  var text = document.getElementById('comments').value;
  var a = document.getElementById('comments');
  if(a != null){
    console.log(text);
  }
  else{
    console.log("No feedback was submitted");
  }
}

console.group("Sign up");

let checkbox = document.getElementById('bt1');
checkbox.addEventListener('click', checkvalue);

function checkvalue(event){
  console.log("Newsletter:");
  var b = document.getElementById('signup');
  if(b.checked == true){
    console.log("Yes, I would like to join the Newsletter")
  }
  else{
    console.log("No, Thank you")
  }
}

console.groupEnd();

