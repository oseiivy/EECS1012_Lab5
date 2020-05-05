// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function mapping() {
   //precondition: 
   // 0 <=score <=0 belong to Real Numbers >= 0
   //Postcondition:
   //output letter grade of score                          
 
   var answer;
   var a = document.getElementById("num1").value;

   switch (true){
    case a>89: 
       answer ="A+";
       break;
    case a>79: 
       answer="A";
       break;
       // in Ex5, you need to add more cases for other letter grades
   case a>74:
      answer="B+";
      break;
   case a>69:
      answer="B";
      break;
   case a>64:
      answer="C+"
      break;
   case a>59:
      answer="C";
      break;
   case a>54:
      answer="D+";
      break;
   case a>49:
      answer="D";
      break;
   case a>40:
      answer="E";
      break;
   default:
      answer="F";
      break;
   }

   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */

      
   document.getElementById("output").innerHTML = answer;
}
