// Current Date Function
function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').innerText = now.toLocaleDateString('en-US', options);
}

// Page Navigation with Sound
function openPage(pageId, navEl) {
    document.getElementById('clickSound').play();
    document.querySelectorAll('.page').forEach(p => { p.style.display = 'none'; p.classList.remove('active'); });
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

    const target = document.getElementById(pageId);
    target.style.display = 'block';
    setTimeout(() => target.classList.add('active'), 10);
    navEl.classList.add('active');
    document.getElementById('page-title').innerText = navEl.innerText;
}

window.onload = () => {
    updateDate();

    // 1. Dashboard Live Line Graph
    
    const liveCtx = document.getElementById('liveLineChart').getContext('2d');
    let liveData = [50, 60, 55, 70, 65, 80, 75];
    const liveChart = new Chart(liveCtx, {
        type: 'line',
        data: {
            labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm'],
            datasets: [{ data: liveData, borderColor: '#fde047', tension: 0.4, fill: true, backgroundColor: 'rgba(253, 224, 71, 0.05)', pointRadius: 0 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    // 2. History Bar Chart
    
    const barCtx = document.getElementById('historyBarChart').getContext('2d');
    new Chart(barCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{ label: 'Volume', data: [400, 700, 500, 900, 600, 800, 950], backgroundColor: '#fde047', borderRadius: 10 }]
        },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } }
    });

    // 3. Asset Donut Chart
    
    const donutCtx = document.getElementById('assetDonutChart').getContext('2d');
    new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: ['BTC', 'ETH', 'USDT'],
            datasets: [{ data: [45, 25, 30], backgroundColor: ['#fde047', '#627eea', '#14f195'], borderWidth: 0 }]
        },
        options: { cutout: '75%', plugins: { legend: { position: 'bottom', labels: { color: '#fff' } } } }
    });

    // 4. Settings Radar Chart
    
    const radarCtx = document.getElementById('settingsRadarChart').getContext('2d');
    new Chart(radarCtx, {
        type: 'radar',
        data: {
            labels: ['Security', 'Speed', 'Uptime', 'UI', 'Privacy'],
            datasets: [{ data: [100, 90, 98, 85, 95], borderColor: '#fde047', backgroundColor: 'rgba(253, 224, 71, 0.2)' }]
        },
        options: { plugins: { legend: { display: false } }, scales: { r: { grid: { color: '#333' }, pointLabels: { color: '#71717a' } } } }
    });

    // Simulate Live Price Update
    setInterval(() => {
        liveData.push(liveData[liveData.length - 1] + (Math.random() * 10 - 5));
        liveData.shift();
        liveChart.update();
    }, 2000);
};