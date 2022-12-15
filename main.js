

document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked(){
   let int = document.getElementById("i").value.toLowerCase();
   let in2 = document.getElementById("in").value.toLowerCase();
   let in3 = document.getElementById("inp").value.toLowerCase();
   let in4 = document.getElementById("inpu").value.toLowerCase();

   let ou = document.getElementById("o");
   let out = document.getElementById("o2");
   let fe = document.getElementById("f");
   let fe1 = document.getElementById("f1");
   let fe2 = document.getElementById("f2");
   let fe3 = document.getElementById("f3");
   let fe4 = document.getElementById("f4");

   let num = 0; 

  

   if (int === "sakurai"|| int === "masahiro"|| int === "masahiro sakurai"){
    num++;
    fe1.innerHTML = "Correct!";
    } else {
        fe1.innerHTML = "Incorrect";
    }

   if ( in2 === "8"|| in2 === "eight"){
    num++;
    fe2.innerHTML = "Correct!";
   } else {
    fe2.innerHTML = "Incorrect";
   }

   if ( in3 === "89"|| in3 === "eighty nine"){
    num++;
    fe3.innerHTML = "Correct!";
   } else {
    fe3.innerHTML = "Incorrect";
   }

  
  

   if ( in4 === "switch"|| in3 === "nintendo switch"){
    num++;
    fe4.innerHTML = "Correct!";
   } else {
    fe4.innerHTML = "Incorrect";
   }
   
   if (num == 0|| num == 1){
   fe.innerHTML = "Please try again";
   }  else if (num == 2){
   fe.innerHTML = "Halfway there!";
   } else if (num == 3){
    fe.innerHTML = "Amazing, youre almost there!";
   } else if (num == 4){
   fe.innerHTML = "Excelent!!";
   } 
   
   let x = (num/4)*100;
   ou.innerHTML = `${num}`;
   out.innerHTML = `${x}`;

}