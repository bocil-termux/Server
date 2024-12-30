document.addEventListener('DOMContentLoaded', () => {
    // Menggunakan API untuk mendapatkan IP publik
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ip-address').textContent = data.ip; // Menampilkan IP
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('ip-address').textContent = 'Error fetching IP';
        });
});
