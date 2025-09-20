function updateClock() {
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  document.getElementById('clock').textContent = `${date} ${time}`;
}
setInterval(updateClock, 1000);
updateClock();