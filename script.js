document.getElementById('form-yatim').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim().toLowerCase();
  const hasil = document.getElementById('hasil');
  const submitButton = document.querySelector('#form-yatim button[type="submit"]');

  const memberAzzahra = ['dicky', 'subani', 'bani', 'rifky', 'rifki', 'iqro', 'ilham', 'fakih', 'wahyu', 'abdul', 'muid', 'anjas', 'catur', 'dedy', 'dedi', 'apriyan', 'dicki'];
  const khodam = ['anjing', 'babi', 'kucing', 'beruk', 'tapir', 'srengenge', 'tuyul', 'macan', 'singa', 'jokowi', 'cobra', 'ayam', 'sapi', 'wewe gombel', 'cicak', 'monyet', 'naga', 'beruang', 'doraemon', 'spongebob', 'patrick'];
  const ciwi = ['zakia', 'imah', 'imalatul'];
  const khodamCiwi = ['marmut', 'merak', 'angsa', 'kucing', 'hamster', 'bebek', 'barbie', 'capung', 'peri', 'bidadari'];

  const randomKhodam = khodam[Math.floor(Math.random() * khodam.length)].toUpperCase();
  const randomKhodamCiwi = khodamCiwi[Math.floor(Math.random() * khodamCiwi.length)].toUpperCase();

  if (nama === '') {
    hasil.innerHTML = '<span style="color: red;">Nama tidak boleh kosong!</span>';
  } else if (memberAzzahra.some(kata => nama.includes(kata))) {
    hasil.innerHTML = `<span style="color: blue;">Khodam kamu adalah ${randomKhodam}</span>`;
    disableForm(submitButton);
  } else if (ciwi.some(kata => nama.includes(kata))) {
    hasil.innerHTML = `<span style="color: blue;">Khodam kamu adalah ${randomKhodamCiwi}</span>`;
    disableForm(submitButton);
  } else {
    hasil.innerHTML = '<span style="color: red;">Daftar Member Az Zahra dulu ya...</span>';
  }
});

// Fungsi untuk menonaktifkan form setelah submit
function disableForm(submitButton) {
  submitButton.disabled = true; // Menonaktifkan tombol submit
  document.getElementById('nama').disabled = true; // Menonaktifkan input nama
}
