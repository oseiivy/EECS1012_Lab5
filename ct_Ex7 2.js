// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly

function Problem07() {
   //precondition: 
   // num is an integer
   //Postcondition:
   //output how many positive and negative numbers              
 
   //var btn;
   var a = parseInt(document.getElementById("num1").value);
   //the button
   // var btn = document.getElementById("btn");
   //the counter
   var pCount = parseInt(document.getElementById("positives_counter").innerHTML);
   var nCount = parseInt(document.getElementById("negatives_counter").innerHTML);

   document.getElementById("test").innerHTML = "a=" + a;

   if (a >0) {
      pCount = pCount + 1;
      document.getElementById("output").innerHTML = "positive";
   } else if (a < 0) {
      nCount = nCount + 1;
      document.getElementById("output").innerHTML = "negative";
   } else {
      parseInt(document.getElementById("positives_counter").innerHTML = pCount);
      parseInt(document.getElementById("negatives_counter").innerHTML = nCount);
   }

   /*
   switch (true){
    case a>0: 
      btn="positive";
      //set the counter to 0
      i = 0;
      //increment the counter by 1 everytime the user clicks on the button
      btn.onclick = function()
      {
         i.innerHTML++;
      };
      break;
      //PLEASE HELP TO PRINT COUNTER VARIABLE
    case a==0:
      document.getElementById("positives_counter").innerHTML = i;
      document.getElementById("negatives_counter").innerHTML= i;
      break;
    default:
      btn="negative";
      //set the counter to 0
      i.innerHTML = 0;
      //increment the counter by 1 everytime the user clicks on the button
      btn.onclick = function()
      {
         i.innerHTML++;
      };
      break;
   }
   */
  

   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */

// document.getElementById("output").innerHTML = btn;
   
}
