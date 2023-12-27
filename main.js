var final = false;
  
function load(){
  document.getElementById("envolep_open").style.display = "none";
  document.getElementById("envolep_open2").style.display = "none";
  document.getElementById("envolep_open3").style.display = "none";
  console.log(screen.width);

  if(screen.width >= 550){
    document.getElementById("msg1").style.width = "300px";
  }
}

function reveal1(){
  document.getElementById("ins").click();
  document.getElementById("envolep").style.display = "none";
  document.getElementById("envolep_open").style.display = "block";

  document.getElementById("msg2").style.display = "none";
  document.getElementById("msg3").style.display = "none";
  document.getElementById("msg1").style.display = "block";
}

function reveal2(){
  document.getElementById("ins").click();
  document.getElementById("envolep2").style.display = "none";
  document.getElementById("envolep_open2").style.display = "block";

  document.getElementById("msg1").style.display = "none";
  document.getElementById("msg2").style.display = "block";
  document.getElementById("msg3").style.display = "none";
}

function reveal3(){
  document.getElementById("ins").click();
  document.getElementById("envolep3").style.display = "none";
  document.getElementById("envolep_open3").style.display = "block";

  document.getElementById("msg1").style.display = "none";
  document.getElementById("msg2").style.display = "none";
  document.getElementById("msg3").style.display = "block";

  final = true;
}

function close(){
  console.log("Letter Closed!");

  if(final == true){
    window.location = "final.html";
  }
}