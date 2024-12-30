document.addEventListener('DOMContentLoaded', () => {
    const firebaseUrl = "https://your-project-id.firebaseio.com/tono_ip.json";

    // Mengambil IP dari Firebase
    fetch(firebaseUrl)
        .then(response => response.json())
        .then(data => {
            const ip = data.ip || "Tidak ditemukan";
            document.getElementById('ip-address').textContent = ip;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('ip-address').textContent = 'Error fetching IP';
        });
});
