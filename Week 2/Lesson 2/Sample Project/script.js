var filmler = [
  {
    id: 1,
    ad: "Tarzan",
    yonetmen: "Yönetmen 1",
    resim: "https://via.placeholder.com/150",
    detay: "Tarzan hakkında yazılanlar",
  },
  {
    id: 2,
    ad: "Tarzan",
    yonetmen: "Yönetmen 2",
    resim: "https://via.placeholder.com/150",
    detay: "Tarzan hakkında yazılanlar",
  },
  {
    id: 3,
    ad: "Tarzan",
    yonetmen: "Yönetmen 3",
    resim: "https://via.placeholder.com/150",
    detay: "Tarzan hakkında yazılanlar",
  },
  {
    id: 4,
    ad: "Tarzan",
    yonetmen: "Yönetmen 4",
    resim: "https://via.placeholder.com/150",
    detay: "Tarzan hakkında yazılanlar",
  },
];

var filmListesi = document.getElementById("filmListesi");

function filmListesiniGuncelle() {
  filmListesi.innerHTML = ""; // Clear the existing film list

  filmler.forEach(function (film, index) {
    var filmDiv = document.createElement("div");
    filmDiv.classList.add("film");

    var filmResim = document.createElement("img");
    filmResim.src = film.resim;
    filmDiv.appendChild(filmResim);

    filmDiv.addEventListener("click", function () {
      var filmDetayi = document.getElementById("filmDetayi");

      // Update filmDetayi content with film information
      filmDetayi.innerHTML = `<h2>${film.ad}</h2><p> Yönetmen: ${film.yonetmen}</p><p>Açıklama: ${film.detay}</p>`;

      // Add active class to make it visible
      filmDetayi.classList.add("active");
    });

    filmListesi.appendChild(filmDiv);
  });
}
filmListesiniGuncelle();
function filmEkleFormuGoster() {
  var filmEkleForm = document.getElementById("filmEkleForm");
  filmEkleForm.classList.toggle("active");
}

function filmEkleForm() {
  var filmAd = document.getElementById("filmAd").value;
  var yonetmenAd = document.getElementById("yonetmenAd").value;
  var filmAciklamasi = document.getElementById("filmAciklamasi").value;
  var filmImg = document.getElementById("filmImg").value;

  // Check if any of the required fields are empty
  if (!filmAd || !yonetmenAd || !filmAciklamasi || !filmImg) {
    alert("Please fill in all fields");
    return;
  }

  var yeniFilm = {
    id: filmler.length + 1,
    ad: filmAd,
    yonetmen: yonetmenAd,
    detay: filmAciklamasi,
    resim: filmImg,
  };

  filmler.push(yeniFilm);
  filmListesiniGuncelle();
  filmEkleFormuGoster();
}

function filmGuncelle(filmId) {
  var film = filmler.find((f) => f.id == filmId);
  if (!film) return;

  var yeniAd = prompt("Yeni film adı: ", film.ad);
  var yeniYonetmen = prompt("Yeni yönetmen: ", film.yonetmen);
  var yeniAciklama = prompt("Yeni açıklama: ", film.detay);
  var yeniImg = prompt("Yeni resim URL: ", film.resim);

  film.ad = yeniAd || film.ad;
  film.yonetmen = yeniYonetmen || film.yonetmen;
  film.detay = yeniAciklama || film.detay;
  film.resim = yeniImg || film.resim;

  filmListesiniGuncelle();
}

function filmSil(filmId) {
  var index = filmler.findIndex((f) => f.id == filmId);
  if (index == -1) return;
  filmler.splice(index, 1);
  filmListesiniGuncelle();
}
