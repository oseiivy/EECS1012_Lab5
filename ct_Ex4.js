// in Ex2 to Ex8, change the name of the following function properly
// also, update pre/post conditions accordingly
function equation() {
   //precondition: 
   //	d = a, b, c belong to Real Numbers >= 0
   //Postcondition:
   //	1,2 or 0 real roots                          


   /* in Ex1, change the following two lines such that 
      num1 and num2 are parsed to integer before be 
      assigned to w and h, respectively.                   */
   /* in Ex 2, rename w and h to a and b, respectively.    */
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
   /* in Ex2, write a similar code to the above line
      to capture the value for c*/
    var c = document.getElementById("num3").value;


   /* in Ex2 to Ex4, you need to replace the following line 
       with some other formulas */
    var d = ((+b)*(+b)) - (4*(+a)*(+c)); 

    var actualroots;
    if (d>0) {
        actualroots='it has 2 distinct roots';
    } else if (d==0) {
        actualroots='its roots are identical';
    } else {
        actualroots='it has no roots in real numbers';
    }


    
    /*Remove later*/
   

    /* round x1 and x2 to 2 decimal places */

   /* in Ex5, you should delete from Line 15 to this line */

   /*   //in Ex 5, uncomment this block
   switch (true){
    case (a>89): 
       answer="A+";
       break;
    case (a>79): 
       answer="A";
       break;
       // in Ex5, you need to add more cases for other letter grades
    default:
       answer="F";
   }
   */

   /* in Ex2 to Ex5, you need to renmae "sum" to make it more relevant
      to those problems, you may also need to rename s to a better 
      varibale that you have in your formulas above */

      document.getElementById("output").innerHTML = actualroots;

}
