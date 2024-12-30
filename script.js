document.addEventListener('DOMContentLoaded', () => {
  // Mengambil IP publik Budi menggunakan API ipify
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      // Menampilkan IP Budi di halaman
      document.getElementById('ip-address').textContent = data.ip;
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
      document.getElementById('ip-address').textContent = 'Failed to get IP';
    });
});
