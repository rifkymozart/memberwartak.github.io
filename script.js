const form = document.getElementById('form-yatim');
const hasil = document.getElementById('hasil');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.toLowerCase();
  const yatim = ['dedy', 'dedi', 'catur'];

  let ketemu = false;
  yatim.forEach(function(kata) {
    if (nama.includes(kata)) {
      ketemu = true;
    }
  });

  if (ketemu) {
    hasil.innerText = 'Kamu Yatim';
  } else {
    hasil.innerText = 'Kamu Bukan Yatim';
  }
});