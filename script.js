// Dummy Data
const projects = [
    {
        id: 1,
        title: "Columbia Asia Hospital Analysis",
        description: "Comprehensive data-driven evaluation of departmental performance, analyzing revenue streams and patient inflow volatility.",
        image: "https://raw.githubusercontent.com/febx1/Columbia-Asia-Hospital-Analysis/main/image.png",
        tags: ["Power BI", "DAX", "SQL", "Excel"],
        details: "Analyzed financial concentration where Orthopedics and General Practice drove 66% of revenue. Identified seasonal peak of 530 ER visits in August. Recommended dynamic physician allocation to maintain 37-min wait time stability.",
        github: "https://github.com/febx1/Columbia-Asia-Hospital-Analysis"
    },
    {
        id: 2,
        title: "Chinook Music Store Analysis",
        description: "SQL-based analysis of the Chinook digital music store database to derive business insights on customer behavior.",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", // Keep this high-quality one since no screenshot found
        tags: ["SQL", "Data Modeling", "Business Intelligence"],
        details: "Explored sales trends, artist performance, and genre popularity. Segemented customers by geography and purchase history to optimize marketing campaigns. Derived actionable insights for inventory and licensing.",
        github: "https://github.com/febx1/Chinook-Music-Store-Data-Analysis"
    },
    {
        id: 3,
        title: "IT Ticket Management Dashboard",
        description: "Interactive Excel dashboard for analyzing IT support metrics, resolution efficiency, and agent performance.",
        image: "https://raw.githubusercontent.com/febx1/IT-Ticket-Management-Excel-Project/main/images/dashboard1.png",
        tags: ["Excel", "Dashboard", "KPI Tracking"],
        details: "Optimized IT operations by identifying high/low performers. Analyzed correlation between resolution times and employee satisfaction. Visualized severity distribution and volume trends.",
        github: "https://github.com/febx1/IT-Ticket-Management-Excel-Project"
    }
];

const experience = [
    {
        id: 1,
        role: "Senior Web App Engineer",
        company: "If Else Cloud",
        period: "Nov 2023 - Jun 2024",
        description: "Led development of Kypeco, a smart manufacturing and MES platform. Architected and implemented real-time dashboards, work-order management, and reporting modules. Collaborated with backend teams to ensure scalability, reliability, and performance.",
        tech: ["Real-time Dashboards", "MES", "System Architecture"]
    },
    {
        id: 2,
        role: "Software Engineer",
        company: "Nous Infosystems",
        period: "Jul 2022 - Nov 2023",
        description: "Engineered and maintained single-page applications (SPAs) using AngularJS. Built modular UI components and interactive data visualizations with Kendo UI. Integrated RESTful APIs for dynamic and responsive performance.",
        tech: ["AngularJS", "Kendo UI", "REST APIs"]
    }
];

const education = [
    {
        id: 1,
        degree: "Data Analyst Certification",
        institution: "Newton School",
        period: "Completed Jun 2025",
        description: "Intensive training in SQL, Python, Power BI, and Excel. Specializing in data cleaning, dashboard development, and business intelligence reporting.",
        link: "https://my.newtonschool.co/course/uds5zdmpkagm/certificate/4fqacavug6d7/verify"
    },
    {
        id: 2,
        degree: "Bachelor of Computer Applications",
        institution: "Kristu Jayanti College",
        period: "Jun 2019 - Jun 2022",
        description: "Focus on web engineering and data structures. Strong background in transforming raw data into actionable insights.",
        link: "#"
    }
];

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/febin-george1/",
        icon: "linkedin",
        color: "hover:text-blue-500"
    },
    {
        name: "Newton School",
        url: "https://my.newtonschool.co/user/febingeorge",
        icon: "graduation-cap",
        color: "hover:text-primary"
    },
    {
        name: "GitHub",
        url: "https://github.com/febin-p-george/",
        icon: "github",
        color: "hover:text-gray-400"
    }
];

const skills = [
    { name: "SQL", icon: "database", color: "#4479A1", size: "text-4xl md:text-6xl" },
    { name: "Python", icon: "terminal", color: "#3776AB", size: "text-3xl md:text-5xl" },
    { name: "Power BI", icon: "bar-chart-3", color: "#F2C811", size: "text-4xl md:text-6xl" },
    { name: "Excel", icon: "table", color: "#217346", size: "text-3xl md:text-5xl" },
    { name: "NumPy", icon: "box", color: "#013243", size: "text-2xl md:text-4xl" },
    { name: "Pandas", icon: "layers", color: "#150458", size: "text-3xl md:text-5xl" },
    { name: "Seaborn", icon: "pie-chart", color: "#4c72b0", size: "text-2xl md:text-4xl" },
    { name: "Matplotlib", icon: "line-chart", color: "#11557c", size: "text-2xl md:text-4xl" }
];

const skillIcons = []; // Not used anymore as icons are in skills array

// DOM Elements
const projectsGrid = document.getElementById('projects-grid');
const experienceTimeline = document.getElementById('experience-timeline');
const educationTimeline = document.getElementById('education-timeline');
const skillsList = document.getElementById('skills-cloud');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalBackdrop = document.getElementById('modal-backdrop');
const socialLinksGrid = document.getElementById('social-links-grid');
const cursor = document.getElementById('custom-cursor');
const follower = document.getElementById('cursor-follower');

// Initialize Icons
lucide.createIcons();

// Custom Cursor Logic
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    gsap.to(cursor, {
        x: x,
        y: y,
        opacity: 1,
        duration: 0.1
    });
    
    gsap.to(follower, {
        x: x - 12,
        y: y - 12,
        opacity: 1,
        duration: 0.3
    });
});

// Interactive Cursor States
const addCursorInteraction = (elements) => {
    elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            follower.classList.add('active');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            follower.classList.remove('active');
        });
    });
};

// Handle Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const preloaderText = document.getElementById('preloader-text');
    
    const steps = ["Parsing SQL...", "Cleaning Datasets...", "Optimizing Models...", "Ready!"];
    let step = 0;
    
    const interval = setInterval(() => {
        if (preloaderText) {
            if (step < steps.length) {
                preloaderText.innerText = steps[step];
                step++;
            } else {
                clearInterval(interval);
                gsap.to(preloader, {
                    opacity: 0,
                    duration: 0.8,
                    onComplete: () => {
                        preloader.style.display = 'none';
                        startHeroAnimations();
                        initAnimations();
                    }
                });
            }
        } else {
            // If text element is missing, still hide preloader
            clearInterval(interval);
            preloader.style.display = 'none';
            startHeroAnimations();
            initAnimations();
        }
    }, 600);
});

function startHeroAnimations() {
    // Hero Animations
    const heroTl = gsap.timeline();
    heroTl.to('.hero-anim', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
    });
    
    // Magnetic Effect for Links and Buttons
    const interactiveElements = document.querySelectorAll('.hero-anim a, nav a, #contact a');
    interactiveElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(el, {
                x: x * 0.25,
                y: y * 0.25,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        });
    });

    // Create floating data points in hero
    for(let i=0; i<15; i++) {
        const dot = document.createElement('div');
        dot.className = 'absolute w-1 h-1 bg-primary/40 rounded-full pointer-events-none';
        document.getElementById('home').appendChild(dot);
        
        gsap.set(dot, {
            x: gsap.utils.random(0, window.innerWidth),
            y: gsap.utils.random(0, window.innerHeight),
            opacity: gsap.utils.random(0.2, 0.6)
        });
        
        gsap.to(dot, {
            x: "+=random(-100, 100)",
            y: "+=random(-100, 100)",
            duration: "random(10, 20)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

function initAnimations() {
    // Reveal animations for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const container = section.querySelector('.container');
        if (container) {
            gsap.from(container, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
        }
    });

    // Staggered projects reveal
    gsap.to('.project-card', {
        scrollTrigger: {
            trigger: '#projects-grid',
            start: 'top 70%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // Cursor interactions for all links and buttons
    addCursorInteraction(document.querySelectorAll('a, button, .project-card, .skill-bubble, .timeline-item div'));

    // Initialize Vanilla Tilt for project cards
    VanillaTilt.init(document.querySelectorAll(".project-card"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

    // Floating animation for skill bubbles
    document.querySelectorAll('.skill-bubble').forEach((bubble, i) => {
        gsap.to(bubble, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
                trigger: '#skills-cloud',
                start: 'top 80%',
            },
            onComplete: () => {
                // Once entered, start the constant floating
                gsap.to(bubble, {
                    y: "random(-10, 10)",
                    x: "random(-5, 5)",
                    duration: "random(2, 4)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            }
        });
    });

    // Parallax for Experience items
    gsap.utils.toArray('.timeline-item').forEach(item => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        });
    });
}

// Render Projects
if (projectsGrid) {
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card glass rounded-xl overflow-hidden cursor-pointer hover-shine'; // Removed opacity-0 translate-y-10
        card.innerHTML = `
            <div class="relative h-48 overflow-hidden group">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="project-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <button class="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        <i data-lucide="eye" class="w-4 h-4"></i> View Case Study
                    </button>
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${project.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(tag => `<span class="bg-gray-800 text-xs px-2 py-1 rounded-md text-gray-300 border border-gray-700 flex items-center gap-1"><i data-lucide="hash" class="w-3 h-3 text-primary/70"></i>${tag}</span>`).join('')}
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(project));
        projectsGrid.appendChild(card);
    });
}

// Render Timeline (Experience & Education)
const renderTimelineItem = (item, type) => {
    const div = document.createElement('div');
    div.className = 'timeline-item relative pl-12 pb-12'; // Removed opacity-0 translate-x-[-30px]
    const icon = type === 'work' ? 'briefcase' : 'graduation-cap';
    const borderColor = type === 'work' ? 'border-primary' : 'border-green-500';
    const bgColor = type === 'work' ? 'bg-primary' : 'bg-green-500';
    const textColor = type === 'work' ? 'text-primary' : 'text-green-400';
    const groupHoverText = type === 'work' ? 'group-hover:text-primary' : 'group-hover:text-green-400';
    
    div.innerHTML = `
        <div class="absolute -left-[9px] top-6 w-4 h-4 rounded-full ${bgColor} border-4 border-gray-900 group-hover:scale-125 transition-transform z-10 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
        <div class="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50 hover:border-primary/50 hover:bg-gray-800/60 transition-all duration-300 group shadow-lg hover:shadow-primary/10 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <i data-lucide="${icon}" class="w-16 h-16 ${textColor}"></i>
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 relative z-10">
                <h3 class="text-xl font-bold text-white ${groupHoverText} transition-colors">${item.role || item.degree}</h3>
                <span class="text-xs ${bgColor}/10 ${textColor} px-3 py-1 rounded-full font-medium border ${borderColor}/20 self-start sm:self-auto flex items-center gap-1">
                    <i data-lucide="${type === 'work' ? 'calendar' : 'award'}" class="w-3 h-3"></i>
                    ${item.period}
                </span>
            </div>
            <h4 class="text-lg text-gray-300 mb-3 flex items-center gap-2 relative z-10">
                <i data-lucide="${type === 'work' ? 'building-2' : 'school'}" class="w-4 h-4 text-gray-500"></i>
                ${item.company || item.institution}
            </h4>
            <p class="text-gray-400 text-sm leading-relaxed mb-4 relative z-10">${item.description}</p>
            ${item.tech ? `
            <div class="flex flex-wrap gap-2 pt-3 border-t border-gray-700/50 relative z-10">
                ${item.tech.map(t => `<span class="text-xs bg-gray-900 text-gray-300 border border-gray-700 px-2 py-1 rounded-md font-mono flex items-center gap-1 hover:border-primary/40 hover:text-primary transition-colors"><i data-lucide="code-2" class="w-3 h-3"></i> ${t}</span>`).join('')}
            </div>` : ''}
            ${item.link && item.link !== '#' ? `<div class="mt-4 relative z-10"><a href="${item.link}" target="_blank" class="inline-flex items-center bg-primary/10 text-primary text-sm px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group-btn"><i data-lucide="check-circle" class="w-4 h-4 mr-2"></i> Verify Credential</a></div>` : ''}
        </div>
    `;
    return div;
};

// Render separate timelines
if (experienceTimeline) {
    experience.forEach(item => experienceTimeline.appendChild(renderTimelineItem(item, 'work')));
}
if (educationTimeline) {
    education.forEach(item => educationTimeline.appendChild(renderTimelineItem(item, 'education')));
}
lucide.createIcons(); // Ensure timeline icons are rendered

// Render Skills
skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = `skill-bubble group relative flex flex-col items-center justify-center p-6 transition-all duration-500 hover:scale-110`; // Removed opacity-0 translate-y-10
    div.innerHTML = `
        <div class="relative">
            <div class="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <i data-lucide="${skill.icon}" class="${skill.size} mb-3 relative z-10 transition-colors" style="color: ${skill.color}"></i>
        </div>
        <span class="text-sm md:text-lg font-bold text-gray-400 group-hover:text-white transition-colors tracking-widest uppercase">${skill.name}</span>
        
        <!-- Tooltip effect -->
        <div class="absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-gray-700 shadow-xl z-20">
            Expertise: ${skill.name}
            <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-r border-b border-gray-700"></div>
        </div>
    `;
    if (skillsList) skillsList.appendChild(div);
});
lucide.createIcons();

// Render Social Links
if (socialLinksGrid) {
    socialLinks.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = "_blank";
        a.className = `bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center gap-4 ${link.color}`;
        a.innerHTML = `
            <div class="p-4 rounded-full bg-gray-900 group-hover:bg-primary/10 transition-colors">
                <i data-lucide="${link.icon}" class="w-8 h-8 transition-transform group-hover:scale-110"></i>
            </div>
            <span class="font-bold text-xl text-gray-300 group-hover:text-white">${link.name}</span>
            <p class="text-gray-500 text-sm">View Profile</p>
        `;
        socialLinksGrid.appendChild(a);
    });
}
lucide.createIcons(); // Final icon generation

// Modal Logic
function openModal(project) {
    modalContent.innerHTML = `
        <div class="relative">
            <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover">
            <button id="close-modal" class="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors">
                <i data-lucide="x" class="w-6 h-6"></i>
            </button>
        </div>
        <div class="p-8">
            <h2 class="text-3xl font-bold mb-2 text-white">${project.title}</h2>
            <div class="flex flex-wrap gap-2 mb-6">
                ${project.tags.map(tag => `<span class="bg-primary/20 text-primary text-sm px-3 py-1 rounded-full border border-primary/30">${tag}</span>`).join('')}
            </div>
            <div class="prose prose-invert max-w-none">
                <p class="text-lg text-gray-300 mb-6">${project.description}</p>
                <h3 class="text-xl font-semibold mb-2 text-white">Project Details</h3>
                <p class="text-gray-400 leading-relaxed">${project.details}</p>
            </div>
            <div class="mt-8 pt-6 border-t border-gray-700 flex justify-between gap-4">
                ${project.github ? `<a href="${project.github}" target="_blank" class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"><i data-lucide="github" class="w-4 h-4"></i> View Code</a>` : ''}
                <button class="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg font-medium transition-colors" onclick="closeModal()">Close Project</button>
            </div>
        </div>
    `;
    lucide.createIcons();
    
    // Close button event
    document.getElementById('close-modal').addEventListener('click', closeModal);
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

modalBackdrop.addEventListener('click', closeModal);

// GSAP Animations
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Parallax Effect for Hero
gsap.to('#hero-bg', {
    scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 100
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 0.6,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: "power2.out",
                overwrite: true
            });
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-dark/95');
        navbar.classList.remove('bg-dark/80');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-dark/95');
        navbar.classList.add('bg-dark/80');
    }
});

// Simple Particle Effect
const canvas = document.createElement('canvas');
canvas.className = 'absolute inset-0 z-0'; // Ensure canvas is positioned correctly
const ctx = canvas.getContext('2d');
const heroBg = document.getElementById('hero-bg');
heroBg.appendChild(canvas);

let width, height;
let particles = [];

// SVG Icons for Particles (Simplified paths or images)
// Using text-based icons (emoji or Lucide approximations) is easier on canvas without loading images
// But user requested "icons like sql, numpy powerbi". 
// Best approach: Use FontAwesome unicode or simple text representations with specific colors.
// OR draw simplified shapes.
// Let's use stylized text with colors matching the tech.

const techParticles = [
    { text: "SQL", color: "#00758F" },      // MySQL Blue
    { text: "Py", color: "#3776AB" },       // Python Blue
    { text: "BI", color: "#F2C811" },       // PowerBI Yellow
    { text: "XL", color: "#217346" },       // Excel Green
    { text: "Np", color: "#013243" },       // NumPy Dark Blue
    { text: "Pd", color: "#150458" },       // Pandas Dark Blue
    { text: "AWS", color: "#FF9900" }       // AWS Orange
];

function resize() {
    width = canvas.width = heroBg.offsetWidth;
    height = canvas.height = heroBg.offsetHeight;
}

class Particle {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 14 + 12; // Font size
        const type = techParticles[Math.floor(Math.random() * techParticles.length)];
        this.text = type.text;
        this.color = type.color;
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.reset(); // Respawn if out of bounds to keep flow continuous
        }
    }

    draw() {
        ctx.font = `bold ${this.size}px Inter, sans-serif`;
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fillText(this.text, this.x, this.y);
        ctx.globalAlpha = 1.0;
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, width, height);
    
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animateParticles);
}

function initParticles() {
    resize();
    particles = [];
    for (let i = 0; i < 40; i++) {
        particles.push(new Particle());
    }
    animateParticles();
}

window.addEventListener('resize', () => {
    resize();
});
initParticles();
