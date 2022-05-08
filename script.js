var deger = document.getElementById("degeri_al");
var programla = document.getElementById("programla");
var baslat = document.getElementById("baslat");
var durdur = document.getElementById("durdur");

var kutu = document.getElementsByClassName("kutu")[0];
var durum = document.getElementsByClassName("durum")[0];
var saniye = document.getElementsByClassName("deger")[0];

// console.log(saniye);
var x;
programla.addEventListener("click", () => {
  saniye.innerHTML = deger.value;
  durum.classList.remove("gorun");
});
baslat.addEventListener("click", () => {
  x = setInterval(gerisay, 1000);
  function gerisay() {
    var degeri_al = Number(saniye.textContent);
    if (degeri_al > 0) {
      degeri_al -= 1;
      saniye.innerHTML = degeri_al.toString();
      kutu.classList.toggle("tetik");
    } else {
      clearInterval(x);
      durum.classList.add("gorun");
    }
  }
});

durdur.addEventListener("click", () => {
  clearInterval(x);
});
