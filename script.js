// Hit Counter
let hitCount = localStorage.getItem('hitCount') || 0;
hitCount++;
localStorage.setItem('hitCount', hitCount);
document.getElementById('hit-count').innerText = hitCount;

// Last Updated
document.getElementById('last-updated').innerText = new Date().toLocaleDateString();
