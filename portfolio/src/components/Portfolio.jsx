import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Smartphone,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import "./portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    AOS.init({
      duration: 1000, // Duration for the animations
      // once: true, // Animation triggers once
    });
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
    backend: ["Node.js", "Express.js", "RESTful APIs",  "JWT Auth"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git",  "Postman", "VS Code"],
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce application with payment integration, user authentication, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/Anirudha-123/MERN",
      live: "https://mern-8tqb.onrender.com/",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description:
        "WebSocket-based chat app with rooms, private messaging, and file sharing capabilities.",
      tech: ["React", "Socket.io", "Express", "MongoDB"],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    },
    {
      id: 3,
      title: "Task Management System",
      description:
        "Collaborative project management tool with drag-and-drop, real-time updates, and team collaboration.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media metrics with data visualization and reporting features.",
      tech: ["React", "Express", "MongoDB", "Chart.js"],
      github: "#",
      live: "#",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-text">Portfolio</span>
          </div>

          <div className="nav-links-desktop">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? "nav-link-active" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <button
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="mobile-menu-item"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
    

       <section id="home" className="hero-section">
        <div className="hero-wrapper">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <div className="hero-badge">MERN Stack Developer</div>
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Anirudha Kolekar</span>
            </h1>
            <p className="hero-subtitle">
              Building scalable web applications with modern technologies
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary"
              >
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/Anirudha-123" className="social-icon"><Github size={24} /></a>
              <a href="https://www.linkedin.com/in/anirudhakolekar" className="social-icon"><Linkedin size={24} /></a>
              <a href="mailto:anirudha0045@gmail.com" className="social-icon"><Mail size={24} /></a>
            </div>
          </div>
          <div className={`hero-image-container ${isVisible ? 'fade-in-right' : ''}`} data-aos="fade-right">
            <div className="hero-image-wrapper">
              <img 
                src="/My_img.jpg" 
                alt="Anirudha Kolekar" 
                className="hero-image"
              />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
        <button 
          onClick={() => scrollToSection('about')}
          className="scroll-indicator"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-text">
              <p className="about-paragraph">
                I'm a passionate MERN Stack Developer with expertise in building
                full-stack web applications. I specialize in creating
                responsive, user-friendly interfaces and robust backend systems.
              </p>
              <p className="about-paragraph">
                With a strong foundation in MongoDB, Express.js, React.js, and
                Node.js, I deliver scalable solutions that solve real-world
                problems. I'm constantly learning and adapting to new
                technologies to stay at the forefront of web development.
              </p>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">6 </div>
                  <div className="stat-label">months Experience</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container section-dark">
        <div className="section-content">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon-wrapper">
                <Code className="skill-icon" />
              </div>
              <h3 className="skill-category-title">Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon-wrapper">
                <Server className="skill-icon" />
              </div>
              <h3 className="skill-category-title">Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon-wrapper">
                <Database className="skill-icon" />
              </div>
              <h3 className="skill-category-title">Database</h3>
              <div className="skill-tags">
                {skills.database.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon-wrapper">
                <Smartphone className="skill-icon" />
              </div>
              <h3 className="skill-category-title">Tools & Others</h3>
              <div className="skill-tags">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <div className="section-content">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <a href={project.github} className="project-link">
                      <Github size={24} />
                    </a>
                    <a href={project.live} className="project-link">
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container section-dark">
        <div className="section-content">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="contact-content">
            <p className="contact-subtitle">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="contact-grid">
              <a
                href="mailto:your.anirudha0045@gmail.com"
                className="contact-card"
              >
                <Mail className="contact-icon" />
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">anirudha0045@gmail.com</div>
                </div>
              </a>
              <a href="#" className="contact-card">
                <Github className="contact-icon" />
                <div>
                  <div className="contact-label">GitHub</div>
                  <div className="contact-value">@Anirudha-123</div>
                </div>
              </a>
              <a href="#" className="contact-card">
                <Linkedin className="contact-icon" />
                <div>
                  <div className="contact-label">LinkedIn</div>
                  <div className="contact-value">
anirudhakolekar</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026  <span className="text-white">Anirudha Kolekar</span>. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
