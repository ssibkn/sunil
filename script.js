// Simulate hit counter
let hitCount = localStorage.getItem('hitCount') || 0;
hitCount++;
localStorage.setItem('hitCount', hitCount);
document.getElementById('hit-count').innerText = hitCount;

// Update last updated date dynamically
document.getElementById('last-updated').innerText = new Date().toLocaleDateString();
