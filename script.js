// Xử lý logic tính năng bật/tắt Chế độ tối (Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'light') {
        htmlElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Chế độ sáng';
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        themeToggle.textContent = 'Chế độ tối';
    }
});

// Xử lý Animation khi cuộn trang sử dụng Intersection Observer API
const cards = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null,
    threshold: 0.1, // Khi cấu trúc card lộ diện 10% sẽ kích hoạt
    rootMargin: "0px"
};

const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Chạy hiệu ứng 1 lần duy nhất khi cuộn qua
        }
    });
}, observerOptions);

cards.forEach(card => {
    scrollObserver.observe(card);
});