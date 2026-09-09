let currentPage = 1;

function nextPage() {
    const currentPageEl = document.getElementById(`page-${currentPage}`);
    currentPageEl.classList.remove('active');
    
    currentPage++;
    
    const nextPageEl = document.getElementById(`page-${currentPage}`);
    if (nextPageEl) {
        nextPageEl.classList.add('active');
    }
}

function resetPages() {
    const currentPageEl = document.getElementById(`page-${currentPage}`);
    currentPageEl.classList.remove('active');
    
    currentPage = 1;
    
    const firstPageEl = document.getElementById('page-1');
    firstPageEl.classList.add('active');
}

// Create floating hearts
function createHearts() {
    const heartsContainer = document.getElementById('hearts-container');
    const hearts = ['❤️', '💗', '💕', '💖', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        
        const randomLeft = Math.random() * 100;
        heart.style.left = randomLeft + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 300);
}

// Create floating in-love emojis
function createLoveEmojis() {
    const heartsContainer = document.getElementById('hearts-container');
    const emojis = ['😍', '🥰', '😘', '😻', '💋'];
    
    setInterval(() => {
        const emoji = document.createElement('div');
        emoji.className = 'love-emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        const randomLeft = Math.random() * 100;
        emoji.style.left = randomLeft + '%';
        emoji.style.animationDuration = (Math.random() * 3 + 6) + 's';
        emoji.style.animationDelay = Math.random() * 3 + 's';
        
        heartsContainer.appendChild(emoji);
        
        setTimeout(() => {
            emoji.remove();
        }, 9000);
    }, 400);
}

// Create floating name
function createFloatingNames() {
    const nameContainer = document.getElementById('name-container');
    const names = ['Kutlwano', 'Kutlwano', 'Kutlwano'];
    
    setInterval(() => {
        const nameEl = document.createElement('div');
        nameEl.className = 'floating-name';
        nameEl.textContent = names[Math.floor(Math.random() * names.length)];
        
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 5;
        
        nameEl.style.left = randomLeft + '%';
        nameEl.style.top = Math.random() * 80 + 'px';
        nameEl.style.animationDelay = randomDelay + 's';
        nameEl.style.animationDuration = (Math.random() * 4 + 8) + 's';
        
        nameContainer.appendChild(nameEl);
        
        setTimeout(() => {
            nameEl.remove();
        }, 12000);
    }, 2000);
}

// Initialize animations when page loads
window.addEventListener('load', () => {
    createHearts();
    createLoveEmojis();
    createFloatingNames();
});

// Add some interactivity - hearts follow cursor (optional)
document.addEventListener('mousemove', (e) => {
    // Optional: Add cursor effect here if desired
});
