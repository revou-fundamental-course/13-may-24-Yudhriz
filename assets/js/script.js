document.addEventListener("DOMContentLoaded", function () {
  const selectLuas = document.querySelector(
    ".choose__rumus .select_rumus:nth-child(1)"
  );
  const selectKeliling = document.querySelector(
    ".choose__rumus .select_rumus:nth-child(2)"
  );

  const formLuas = document.getElementById("form__luas");
  const formKeliling = document.getElementById("form__keliling");

  const imgLuas = document.getElementById("img__luas");
  const imgKeliling = document.getElementById("img__keliling");

  // Fungsi untuk menampilkan form dan menyembunyikan form yang lain
  function showForm(formToShow, formToHide) {
    formToShow.style.display = "block";
    formToHide.style.display = "none";
  }

  // Fungsi untuk menampilkan gambar dan menyembunyikan gambar yang lain (hanya untuk small screen)
  function showImage(imgToShow, imgToHide) {
    if (window.innerWidth < 768) {
      imgToShow.style.display = "block";
      imgToHide.style.display = "none";
    }
  }

  // Event listeners untuk menyeleksi form
  selectLuas.addEventListener("click", function () {
    showForm(formLuas, formKeliling);
    showImage(imgLuas, imgKeliling);
  });

  selectKeliling.addEventListener("click", function () {
    showForm(formKeliling, formLuas);
    showImage(imgKeliling, imgLuas);
  });

  // Default form yang ditampilkan adalah form luas
  showForm(formLuas, formKeliling);
  showImage(imgLuas, imgKeliling);

  // Menghitung luas dan keliling
  // Fungsi Menghitung Luas Segitiga
  function hitungLuasSegitiga(alas, tinggi) {
    return 0.5 * alas * tinggi;
  }

  // Fungsi Menghitung Keliling Segitiga
  function hitungKelilingSegitiga(sisiA, sisiB, sisiC) {
    return sisiA + sisiB + sisiC;
  }

  // Event listener untuk luas pas disubmit
  document
    .getElementById("formLuasSegitiga")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const alas = parseFloat(document.getElementById("alas").value);
      const tinggi = parseFloat(document.getElementById("tinggi").value);
      const hasil = hitungLuasSegitiga(alas, tinggi);
      document.getElementById(
        "hasilLuas"
      ).innerText = `Rumus : 1/2 x ${alas} x ${tinggi} = ${hasil}`;
    });

  // Event listener untuk keliling pas disubmit
  document
    .getElementById("formKelilingSegitiga")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const sisiA = parseFloat(document.getElementById("sisiA").value);
      const sisiB = parseFloat(document.getElementById("sisiB").value);
      const sisiC = parseFloat(document.getElementById("sisiC").value);
      const hasil = hitungKelilingSegitiga(sisiA, sisiB, sisiC);
      document.getElementById(
        "hasilKeliling"
      ).innerText = `Rumus : ${sisiA} + ${sisiB} + ${sisiC} = ${hasil}`;
    });

  // Menambahkan event listener untuk resize window
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      imgLuas.style.display = "block";
      imgKeliling.style.display = "block";
    } else {
      if (formLuas.style.display === "block") {
        showImage(imgLuas, imgKeliling);
      } else {
        showImage(imgKeliling, imgLuas);
      }
    }
  });
});
