document.getElementById('form-buat-akun').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const nama = document.getElementById('nama').value;

  // Simpan data ke lokal storage
    localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('nama', nama)
  // Redirect ke berhasil.html
  window.location.href = ('/BERHASIL LOGIN/berhasil.html')
  })
 
  
 