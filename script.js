function submitTopUp() {
  const game = document.getElementById('game').value;
  const userID = document.getElementById('userID').value.trim();
  const nominal = document.getElementById('nominal').value;
  const payment = document.getElementById('payment').value;
  const result = document.getElementById('result');

  if (!game || !userID || !nominal || !payment) {
    result.style.color = 'red';
    result.textContent = 'Mohon lengkapi semua data.';
  } else {
    result.style.color = 'green';
    result.textContent = `Top-Up Berhasil!\nGame: ${game}, ID: ${userID}, ${nominal}, Pembayaran: ${payment}`;
  }
}
