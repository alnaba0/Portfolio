const ALL_PROJECTS = [
    {
      title: "Mini SOC Dashboard",
      type: "Security Monitoring",
      description: "A web dashboard that analyzes sample logs, IDS results, and Nmap scans to raise alerts for port scans, repeated failed logins, and high-severity events.",
      tags: ["Flask", "Cybersecurity", "Log Analysis"],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #404040, #1c1c1d)", // indigo to deep navy
      link: "https://github.com/alnaba0/mini-soc-dashboard"
    },
    {
      title: "Marine Wildlife Monitoring",
      type: "hardware garduation project",
      description: "An AI-driven submarine with a camera and a Raspberry Pi engineered to monitor marine wildlife and track environmental metrics. The project is yet to finsh",
      tags: ["Flutter", "Dart", "Machine Learning",],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #0d326e, #5bb8c8)" // blue to cyan
    },
    {
      title: "Phishing Detection Agent",
      type: "AI model",
      description: "Team project that classifies email and SMS messages as safe, phishing, or malicious with a hybrid NLP and XGBoost model, reaching 96.7% test accuracy.",
      tags: ["Python", "XGBoost", "NLP"],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #0f1322, #070f5a)" // orange to red
    },
    {
      title: "SafeLedger Image",
      type: "Computer Vision",
      description: "Team web app project that detects hardhats and safety vests in worksite photos with a YOLOv8 model and records each result in a tamper-evident ledger.",
      tags: ["Flask", "YOLOv8", "ONNX Runtime"],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #3b6850, #b3b1ac)" // yellow
    },
    {
      title: "SafeLedger Video",
      type: "Video Analytics",
      description: "Team web app project that analyzes worksite videos frame by frame, combines detections over time into a PPE compliance decision, and keeps a tamper-evident record.",
      tags: ["Flask", "OpenCV", "YOLOv8"],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #327450, #cfd3d5)" // sky blue
    },
    {
      title: "Library Management System",
      type: "Desktop Application",
      description: "Team project: a role-based Java Swing app for managing a book catalog with cover images, borrowing and returns, and member and staff accounts on a MySQL database. The project was designed using software engineering principles and documented to meet requirements.",
      tags: ["Java", "Swing", "MySQL"],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #565656, #f1f1f1)" 
    },
    {
      title: "InputGuard Security Gateway",
      type: "Application Security",
      description: "Team project building an input-validation gateway for a FastAPI login system to detect and block SQL injection, XSS, and command injection attempts.",
      tags: ["FastAPI", "Security", "Python"],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #000000, #00b624)" // green to deep emerald
    },
    {
      title: "Waste Classification System",
      type: "Reserch",
      description: "Team project: an AI system that sorts waste images into seven categories using an ensemble of quantized CNN and YOLOv11 models, tested on a Raspberry Pi 5.",
      tags: ["YOLOv11", "CNN", "Edge AI"],
      fullHeader: true,
      color: "linear-gradient(to bottom right, #e0e0e0, #579213)" // lime to dark olive
    },
    {
      title: "OPIA Coffee Branding",
      type: "Design & Identity",
      description: "Developed the visual identity, menu structure, and 3D-printed serving accessories for a specialty coffee shop. and manneged and trained new employees and devloped resipes for the coffeshop's drinks",
      tags: ["3D Printing", "Design", "Branding","Leading","Barista"],
      color: "linear-gradient(to bottom right, #cf9a71, #461809)" // amber to orange-900
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const menuIcon = document.getElementById('menu-icon');
    
    mobileToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Toggle icon between menu and x
        if (mobileNav.classList.contains('active')) {
            menuIcon.setAttribute('data-lucide', 'x');
        } else {
            menuIcon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    // 3. Inject Projects dynamically
    const projectsGrid = document.getElementById('projects-grid');
    
    ALL_PROJECTS.forEach(project => {
        // Create tags HTML
        const tagsHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
        
        // Split title for the big header text (first word)
        const headerWord = project.fullHeader ? project.title : project.title.split(' ')[0];

        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <div class="project-header" style="background: ${project.color};">
                <h3>${headerWord}</h3>
            </div>
            <div class="project-body">
                <div class="project-type">${project.type}</div>
                <div class="project-title">${project.title}</div>
                <div class="project-desc">${project.description}</div>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
                <a href="${project.link || 'https://github.com/Alnaba0'}" class="project-link" target="_blank">
                    View Details <i data-lucide="external-link"></i>
                </a>
            </div>
        `;
        projectsGrid.appendChild(card);
    });

    // 4. Initialize all Lucide Icons on the page
    lucide.createIcons();
});