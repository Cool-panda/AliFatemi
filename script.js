let poems = [
    "شعر ۱: دوستت دارم تا بی‌نهایت.",
    "شعر ۲: قلبم برای تو می‌تپد.",
    "شعر ۳: زندگی من با تو زیباست.",
    "شعر ۴: عشق تو همیشه در دلم می‌ماند.",
    "شعر ۵: تو بهترین هدیه زندگی منی.",
    "شعر ۶: برای تو می‌نویسم، برای همیشه.",
    "شعر ۷: لبخندت خورشید زندگی من است.",
    "شعر ۸: نگاهت دنیای من را روشن می‌کند.",
    "شعر ۹: در قلبم برای تو همیشه جا هست.",
    "شعر ۱۰: با تو همه چیز معنای دیگری دارد.",
    "شعر ۱۱: تو دلیل تپش قلب منی.",
    "شعر ۱۲: عشق تو بی‌پایان است."
];

let currentPage = 1;
const poemsPerPage = 10;

function renderPoems() {
    const poemsContainer = document.getElementById('poems');
    poemsContainer.innerHTML = '';

    let start = (currentPage - 1) * poemsPerPage;
    let end = start + poemsPerPage;
    let currentPoems = poems.slice(start, end);

    currentPoems.forEach(poem => {
        let poemDiv = document.createElement('div');
        poemDiv.className = 'poem';
        poemDiv.innerText = poem;
        poemsContainer.appendChild(poemDiv);
    });
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPoems();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < Math.ceil(poems.length / poemsPerPage)) {
        currentPage++;
        renderPoems();
    }
});

document.getElementById('poemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newPoem = document.getElementById('newPoem').value.trim();
    if (newPoem) {
        poems.push(newPoem);
        document.getElementById('newPoem').value = '';
        renderPoems();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';  // اینجا ایموجی قلب رو گذاشتیم
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px'; // اندازه رندوم برای جذابیت
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);



renderPoems();
