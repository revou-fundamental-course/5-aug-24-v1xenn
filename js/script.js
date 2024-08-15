// membuat fungsi kalkulator BMI 
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// membuat fungsi perhitungan BMI 
function calculate(){
 // jika ada yang tidak diisi maka muncul tanda 'harus terisi semua!'
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `Harus terisi semua!`;

  }else{
    countBmi();
  }

}

// membuat perhitungan BMI 
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }
// membuat rumus perhitungan BMI 
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

// membuat hasil dari perhitungan BMI    
  var result = '';
  if(bmi<18.5){
    result = 'Underweight';
     }else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obesitas';
     }

resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Berat badan anda  <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

// Saat mengklik <span> (x), modal akan tertutup
span.onclick = function() {
  modal.style.display = "none";
}

// menutup modal 
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
