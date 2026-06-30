const carousel = document.getElementById('carousel');

// Khi rê chuột vào lồng đèn -> Tạm dừng xoay
carousel.addEventListener('mouseover', () => {
    carousel.style.animationPlayState = 'paused';
});

// Khi đưa chuột ra ngoài -> Tiếp tục xoay
carousel.addEventListener('mouseout', () => {
    carousel.style.animationPlayState = 'running';
});