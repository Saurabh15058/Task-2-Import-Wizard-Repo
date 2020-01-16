var q = document.querySelector(".Q");
var p = document.querySelector(".P");

var isBlack1="no";
var isBlack2="no";

p.addEventListener("click", function(){
    if(isBlack1="no"){
       p.style.backgroundColor="black";     
       p.style.color="white";
       isBlack1="yes";

    if(isBlack2="yes"){
      q.style.backgroundColor="#D2CFD6";
      q.style.color="black";
      isBlack2="no";
    }
  }
    else{
      p.style.backgroundColor="#D2CFD6";
      p.style.color="white";
      isBlack1="no";
    }
});


q.addEventListener("click", function(){
  if(isBlack2="no"){
    q.style.backgroundColor="black";     
    q.style.color="white";
    isBlack2 = "yes";

    if(isBlack1="yes"){
      p.style.backgroundColor="#D2CFD6";
      p.style.color="white";
      isBlack1="no";

    }
    else{
      q.style.backgroundColor="#D2CFD6";
      q.style.color="white";
      isBlack2="no";
    }


});
