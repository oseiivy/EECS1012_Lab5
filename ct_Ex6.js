// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function Problem06() {
   //precondition: 
   // num is an integer
   //Postcondition:
   //output whether num is positive or negative                          
 
   var answer;
   var a = document.getElementById("num1").value;

   switch (true){
    case a>0: 
       answer ="positive";
       break;
    case a==0: 
        answer.disabled = true;
        break;
    default:
        answer="negative";
      break;
   }

   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */

      
   document.getElementById("output").innerHTML = answer;
}
