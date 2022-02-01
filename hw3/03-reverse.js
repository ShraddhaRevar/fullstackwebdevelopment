function reversDigits() {

  var num = document.getElementById("number").value;
  var a = num.toString().length;
  if (a<8 || a>8)
  {
    document.getElementById("result").innerHTML= "<span style='color: red;'>'Enter 8 digit number!'</span>"
  }
  else{
 
  let rev_num = 0;
  while(num > 0)
  {
      rev_num = rev_num * 10 + num % 10;
      num = Math.floor(num / 10);
  }

  document.getElementById("result").innerHTML= rev_num;
  }
  
}