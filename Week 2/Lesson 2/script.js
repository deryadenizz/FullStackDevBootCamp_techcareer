/* değişken "var" ile oluşturulur */
/* var kelime ile birlikte gelen karşılığı değer olarak alır. (int, str vs tanımlamak gerekmez) */
var sayi = 5;
var name = "John";

/* let  */
/* const sabit bir değişken oluşturmak için kullanılır. Bir kez değer atanır ve bu değer sonrasında değiştirilemez. */
const pi = 3.14;

/* değişken isimlerinde harf, rakam, dolar işareti unicod karakterleri kullanabiliriz. Büyük-küçük harf duyarlıdır, isimlere dikkat et!! */
/* 
-const myVar
-const myvar 
iki farklı değişkendir.
*/
var meyveler = ["elma", "armut", "muz", "çilek"]; /* dizi oluşturduk */

function selamVer(isim) {
  console.log("Merhaba, " + isim + "!");
}

if (sayi > 3) {
  console.log("Sayı 3'ten büyüktür!");
} else {
  console.log("Sayı 3'ten büyük değildir.!");
}

for (var i = 0; i < meyveler.length; i++) {
  console.log(meyveler[i]);
}

selamVer("Derya");

function Ekle() {
  var alisverisEkle = document.getElementById("alisverisEkle");
  var liste = document.getElementById("liste");
  var yeniOge = document.createElement("li");
  yeniOge.innerText = alisverisEkle.value;

  if (alisverisEkle.value !== " ") {
    liste.appendChild(yeniOge);
    alisverisEkle.value = " ";
    /* Güncelleme */
    yeniOge.onclick = function () {
      var yeniMetin = prompt("Yeni değeri girin:");
      if (yeniMetin !== null && yeniMetin !== "") {
        this.firstChild.nodeValue = yeniMetin;
      }
    };

    /* tekli eleman silme */
    yeniOge.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      this.parentNode.removeChild(yeniOge);
    });
  } else {
    alert("Lütfen bir öğe ekleyiniz");
  }
}

/* tüm listeyi temizleme */
function listeTemizle() {
  var liste = document.getElementById("liste");
  liste.innerHTML = "";
}
