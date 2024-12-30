const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target.querySelector('img');
            image.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); 

const section = document.querySelector('#introduction');
observer.observe(section);

const section1 = document.querySelector('#science');
observer.observe(section1);


const tabButtons = document.querySelectorAll('.tab-button');
const hemisphereInfo = document.querySelectorAll('.hemisphere-info');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        hemisphereInfo.forEach(info => {
            if (info.id === target) {
                info.classList.add('active');
            } else {
                info.classList.remove('active');
            }
        });
    });
});

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showSlide(index) {
    const container = document.querySelector('.slides-container');
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 2000);

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar ul li a');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});


const snowfallContainer = document.getElementById('snowfall');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
  
    const size = Math.random() * 5 + 5; 
    const leftPosition = Math.random() * 100; 
    const animationDuration = Math.random() * 3 + 5; 

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${leftPosition}vw`;
    snowflake.style.animationDuration = `${animationDuration}s`;

    snowfallContainer.appendChild(snowflake);

    
    setTimeout(() => {
        snowflake.remove();
    }, animationDuration * 1000);
}


setInterval(createSnowflake, 100);
