// alert('Other Address');
const different = document.getElementById("defaultCheck1");
const check = document.getElementById("checkBox1");
const adres1 = document.getElementsByClassName("adres1"); 
const adres2 = document.getElementsByClassName("adres2"); 


different.addEventListener("click", function () {
    
      if(different.checked == true){
        check.classList.remove("remover")
        adres1.addAtribute("disabled");
        
        
      }else{
          check.classList.add("remover")
      }
  });



















//   btn3.addEventListener("click", function () {
//     if (btn3.classList == "email") {
//       btn3.classList.remove("email");
//       btn3.classList.add("oemail");
//       window.scrollTo(0, document.body.scrollHeight);
//     }
//   });