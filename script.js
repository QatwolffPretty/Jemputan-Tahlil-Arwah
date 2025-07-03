
const scriptURL = https://script.google.com/macros/s/AKfycbyJyk6tA4hYQ605D4wsoTPqzKLne9AOcpBdW-nGmdKmjIBjasss7savVbklZswpTG5Skg/exec;

document.getElementById('rsvpForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value;
  const pax = document.getElementById('pax').value;

  fetch(scriptURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `nama=${encodeURIComponent(nama)}&pax=${encodeURIComponent(pax)}`
  })
  .then(response => {
    document.getElementById('thankYou').style.display = 'block';
    document.getElementById('rsvpForm').reset();
    updateTotal();
  })
  .catch(error => alert('Masalah menghantar. Sila cuba lagi.'));
});

function updateTotal() {
  fetch(scriptURL)
    .then(res => res.json())
    .then(data => {
      document.getElementById('totalPax').textContent = data.total + " orang";
    });
}

updateTotal();
