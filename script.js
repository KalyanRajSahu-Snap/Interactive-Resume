document.addEventListener("DOMContentLoaded", (event) => {
    // Create grid effect
    const gridContainer = document.getElementById("grid-effect-container")
    const rows = 20
    const cols = 20
  
    for (let i = 0; i < rows * cols; i++) {
      const tile = document.createElement("div")
      tile.className = "grid-effect-tile"
      gridContainer.appendChild(tile)
    }
  
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Skill popup
    const skillItems = document.querySelectorAll(".skill-item")
    const popup = document.getElementById("skill-popup")
    const popupSkillName = document.getElementById("popup-skill-name")
    const popupSkillDescription = document.getElementById("popup-skill-description")
    const closePopup = document.getElementById("close-popup")
  
    const skillDescriptions = {
      // Programming
      Python: "Versatile programming language used for web development, data analysis, AI, and automation.",
      C: "Low-level programming language ideal for system programming and embedded systems.",
      "C++": "Extension of C with object-oriented features, used for game development and high-performance applications.",
  
      // Full Stack Development
      HTML: "Standard markup language for creating web pages and web applications.",
      CSS: "Style sheet language used for describing the presentation of a document written in HTML.",
      JavaScript: "Programming language that enables interactive web pages and is an essential part of web applications.",
      ReactJS: "JavaScript library for building user interfaces, particularly single-page applications.",
      MongoDB: "NoSQL database program that uses JSON-like documents with optional schemas.",
      Express: "Web application framework for Node.js, designed for building web applications and APIs.",
      "Node.js": "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side programming.",
  
      // DevOps
      AWS: "Amazon Web Services, a comprehensive cloud computing platform.",
      Kubernetes: "Open-source container orchestration system for automating application deployment and scaling.",
      Terraform: "Infrastructure as code software tool that enables building and managing cloud infrastructure.",
      Docker: "Platform that uses OS-level virtualization to deliver software in packages called containers.",
      Ansible: "Open-source software provisioning, configuration management, and application-deployment tool.",
      Jenkins: "Open-source automation server that helps automate the software development process.",
  
      // AI
      "Vercel V0": "AI-powered assistant for coding and development tasks.",
      ChatGPT: "AI language model developed by OpenAI for natural language processing and generation.",
      Claude: "AI assistant developed by Anthropic, designed for helpful, harmless, and honest interactions.",
  
      // SQL
      MySQL: "Open-source relational database management system.",
  
      // Version Control Systems
      Git: "Distributed version control system for tracking changes in source code during software development.",
      GitHub: "Platform and cloud-based service for software development and version control using Git.",
    }
  
    skillItems.forEach((item) => {
      item.addEventListener("click", () => {
        const skill = item.getAttribute("data-skill")
        popupSkillName.textContent = skill
        popupSkillDescription.textContent = skillDescriptions[skill]
        popup.style.display = "block"
      })
    })
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "none"
    })
  
    // Close popup when clicking outside
    window.addEventListener("click", (e) => {
      if (e.target == popup) {
        popup.style.display = "none"
      }
    })
  
    // Add animation to sections when they come into view
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = "fadeIn 1s ease-in"
          }
        })
      },
      { threshold: 0.1 },
    )
  
    sections.forEach((section) => {
      observer.observe(section)
    })
  })
  
  