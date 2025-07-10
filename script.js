function enterNest() {
  const password = document.getElementById('passwordInput').value;
  if (password === 'iloveyou') {
    document.getElementById('loginScreen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  } else {
    alert('Oops! Wrong password. Try again 💔');
  }
}

function enterRoom(room) {
  const content = document.getElementById('roomContent');
  if (room === 'lounge') {
    content.innerHTML = `<h3>💬 Lounge Room</h3><p>Chat and share love here.</p>`;
  } else if (room === 'photo') {
    content.innerHTML = `<h3>📸 Photo Wall</h3><p>Upload memories together.</p>`;
  }
}
