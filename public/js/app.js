// VIN-DIESEL Mobile CARB - Main Application
console.log('🏎️ VIN-DIESEL Mobile CARB Initialized');

// Service Worker Registration (PWA Support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}

// Mobile Performance Monitoring
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log('📊 Performance:', entry.name, entry.duration);
    }
});

performanceObserver.observe({ entryTypes: ['measure', 'navigation'] });

// Touch Event Handling
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.opacity = '0.8';
        });

        card.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
});

// Viewport Height Fix for Mobile Browsers
function setVH() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);

// Connection Status Monitor
window.addEventListener('online', () => {
    console.log('🟢 Connection: Online');
    updateConnectionStatus(true);
});

window.addEventListener('offline', () => {
    console.log('🔴 Connection: Offline');
    updateConnectionStatus(false);
});

function updateConnectionStatus(isOnline) {
    const statusIndicator = document.querySelector('.status-indicator');
    if (statusIndicator) {
        statusIndicator.textContent = isOnline ? '🟢 Active' : '🔴 Offline';
    }
}

// App Info
const appInfo = {
    name: 'VIN-DIESEL',
    version: '0.1.0',
    phase: 'Mobile Web',
    status: 'Alpha',
    repository: 'https://github.com/bgillis99-pixel/VIN-Diesel---Mobile-CARB'
};

console.log('📱 App Info:', appInfo);

// Export for potential API usage
window.VinDiesel = {
    version: appInfo.version,
    getStatus: () => appInfo
};
