document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Skill popup
    const skillItems = document.querySelectorAll('.skill-item');
    const popup = document.getElementById('skill-popup');
    const popupSkillName = document.getElementById('popup-skill-name');
    const popupSkillDescription = document.getElementById('popup-skill-description');
    const closePopup = document.getElementById('close-popup');

    const skillDescriptions = {
        'HTML': 'Proficient in writing semantic HTML5 and creating accessible web content.',
        'CSS': 'Skilled in CSS3, including Flexbox, Grid, and responsive design techniques.',
        'JavaScript': 'Strong understanding of ES6+ features and DOM manipulation.',
        'React': 'Experienced in building single-page applications with React and Redux.',
        'Node.js': 'Familiar with server-side JavaScript and building RESTful APIs.',
        'Git': 'Proficient in version control and collaborative development using Git and GitHub.'
    };

    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            const skill = item.getAttribute('data-skill');
            popupSkillName.textContent = skill;
            popupSkillDescription.textContent = skillDescriptions[skill];
            popup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target == popup) {
            popup.style.display = 'none';
        }
    });

    // Add animation to sections when they come into view
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 1s ease-in';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

