document.getElementById('form-yatim').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.toLowerCase();
  const hasil = document.getElementById('hasil');

  const yatim = ['dedy', 'dedi', 'catur'];
  const yatimPasif = 'apriyan';
  const memberWartak = ['dicky', 'subani', 'bani', 'rifky', 'rifki', 'iqro', 'ilham', 'fakih']

  if (nama.includes(yatimPasif)) {
    hasil.innerText = 'Kamu Yatim Pasif!';
  } else if (yatim.some(kata => nama.includes(kata))) {
    hasil.innerText = 'Kamu Yatim!';
  } else if (memberWartak.some(kata => nama.includes(kata))) {
    hasil.innerText = 'Kamu Bukan Yatim!';
  } else {
     hasil.innerText = 'Daftar Member Wartak Dulu AJG!';
  }
});
