let sections = document.querySelectorAll('.display-section');
let navLinks = document.querySelectorAll('.nav-link');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');

            let id = entry.target.getAttribute('id');

            navLinks.forEach(link => {
                link.classList.remove('active');

                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});



const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbyIaz9L3jtHA0-OLlC6gHIcsEOAkZ_33Oc78cq8WE-XvALq0soOcfFIWyjh2ToP-k4rSg/exec", {
        method: "POST",
        body: new FormData(form)
    })
        .then(res => res.json())
        .then(data => {
            if (data.status === "success") {
                alert("Message sent successfully ✅");
                form.reset();
            } else {
                alert("Error sending message ❌");
            }
        })
        .catch(err => {
            alert("Connection error ❌");
        });
});

let btnMood = document.getElementById('mood')
let glassCard = document.querySelectorAll('.glass-card')

document.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('mood')) {
        localStorage.setItem('mood', 'dark');
    }
    mood();
});

btnMood.addEventListener('click', () => {
    let currentMood = localStorage.getItem('mood');
    localStorage.setItem('mood', currentMood === 'dark' ? 'light' : 'dark');
    mood();
});

function mood() {
    if (localStorage.getItem('mood') === 'light') {
        document.documentElement.style.setProperty('--bg-primary', '#fefefe')
        document.documentElement.style.setProperty('--bg-secondary', '#f5f7fa')
        document.documentElement.style.setProperty('--bg-card', '#ffffff')
        document.documentElement.style.setProperty('--text-primary', '#1a202c')
        document.documentElement.style.setProperty('--text-secondary', '#4a5568')
        document.documentElement.style.setProperty('--text-muted', '#718096')
        document.documentElement.style.setProperty('--border-color', '#e2e8f0')
        document.documentElement.style.setProperty('--accent-blue', '#4299e1')
        document.documentElement.style.setProperty('--accent-blue-light', '#63b3ed')
        document.documentElement.style.setProperty('--accent-purple', '#9f7aea')
        document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #4299e1 0%, #9f7aea 100%)')
        document.documentElement.style.setProperty('--glow-primary', '0 0 40px rgba(66,153,225,0.15)')
        document.documentElement.style.setProperty('--glow-subtle', '0 0 20px rgba(66, 153, 225, 0.08)')
        glassCard.forEach(card => {
            card.style.backgroundColor = 'transparent'
        })
    } else if (localStorage.getItem('mood') === 'dark') {
        document.documentElement.style.setProperty('--bg-primary', '#0a0e17')
        document.documentElement.style.setProperty('--bg-secondary', '#111827')
        document.documentElement.style.setProperty('--bg-card', '#1a2234')
        document.documentElement.style.setProperty('--text-primary', '#f0f4f8')
        document.documentElement.style.setProperty('--text-secondary', '#94a3b8')
        document.documentElement.style.setProperty('--text-muted', '#64748b')
        document.documentElement.style.setProperty('--border-color', '#1e293b')
        document.documentElement.style.setProperty('--accent-blue', '#3b82f6')
        document.documentElement.style.setProperty('--accent-blue-light', '#60a5fa')
        document.documentElement.style.setProperty('--accent-purple', '#8b5cf6')
        document.documentElement.style.setProperty('--gradient-primary', ' linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)')
        document.documentElement.style.setProperty('--glow-primary', '0 0 40px rgba(59, 130, 246, 0.3)')
        document.documentElement.style.setProperty('--glow-subtle', '0 0 20px rgba(59, 130, 246, 0.15)')
        glassCard.forEach(card => {
            card.style.backgroundColor = 'rgba(26, 34, 52, 0.7)'
        })
    }


}    






