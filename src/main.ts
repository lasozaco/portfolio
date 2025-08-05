import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  link: string;
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  message: string;
  avatar: string;
}

interface Experience {
  id: number;
  position: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <h2>Mi Portfolio</h2>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" (click)="scrollTo('home')">Inicio</a></li>
          <li><a href="#about" (click)="scrollTo('about')">Sobre mí</a></li>
          <li><a href="#experience" (click)="scrollTo('experience')">Experiencia</a></li>
          <li><a href="#projects" (click)="scrollTo('projects')">Proyectos</a></li>
          <li><a href="#articles" (click)="scrollTo('articles')">Artículos</a></li>
          <li><a href="#testimonials" (click)="scrollTo('testimonials')">Recomendaciones</a></li>
          <li><a href="#contact" (click)="scrollTo('contact')">Contacto</a></li>
        </ul>
        <div class="nav-toggle" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            Hola, soy <span class="gradient-text">María García</span>
          </h1>
          <p class="hero-subtitle">Desarrolladora Full Stack & Diseñadora UX/UI</p>
          <p class="hero-description">
            Creo experiencias digitales excepcionales que combinan diseño elegante 
            con código limpio y funcionalidad robusta.
          </p>
          <div class="hero-buttons">
            <a href="#projects" (click)="scrollTo('projects')" class="btn btn-primary">Ver Proyectos</a>
            <a href="#contact" (click)="scrollTo('contact')" class="btn btn-outline">Contactar</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-avatar">
            <img src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400" alt="María García">
          </div>
          <div class="floating-elements">
            <div class="floating-element element-1"></div>
            <div class="floating-element element-2"></div>
            <div class="floating-element element-3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title">Sobre Mí</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="about-paragraph">
              Soy una desarrolladora apasionada con más de 5 años de experiencia creando 
              soluciones digitales innovadoras. Mi enfoque se centra en la experiencia del 
              usuario y la calidad del código.
            </p>
            <p class="about-paragraph">
              Especializada en tecnologías modernas como React, Angular, Node.js y Python, 
              siempre busco mantenerme actualizada con las últimas tendencias y mejores 
              prácticas del desarrollo web.
            </p>
            <div class="skills">
              <h3>Tecnologías que domino:</h3>
              <div class="skills-grid">
                <div class="skill-item" *ngFor="let skill of skills">
                  <span class="skill-name">{{ skill.name }}</span>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-stats">
            <div class="stat-card" *ngFor="let stat of stats">
              <h3 class="stat-number">{{ stat.number }}</h3>
              <p class="stat-label">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section bg-gradient">
      <div class="container">
        <h2 class="section-title">Experiencia</h2>
        <div class="experience-timeline">
          <div class="timeline-item" *ngFor="let exp of experiences; let i = index" 
               [class.timeline-left]="i % 2 === 0" [class.timeline-right]="i % 2 === 1">
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>{{ exp.position }}</h3>
                <h4>{{ exp.company }}</h4>
                <span class="timeline-period">{{ exp.period }}</span>
              </div>
              <ul class="timeline-description">
                <li *ngFor="let desc of exp.description">{{ desc }}</li>
              </ul>
              <div class="timeline-technologies">
                <span class="tech-tag" *ngFor="let tech of exp.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title">Proyectos Destacados</h2>
        <div class="projects-grid grid grid-2">
          <div class="project-card card" *ngFor="let project of projects">
            <div class="project-image">
              <img [src]="project.image" [alt]="project.title">
              <div class="project-overlay">
                <a [href]="project.link" target="_blank" class="project-link" *ngIf="project.link">
                  Ver Demo
                </a>
                <a [href]="project.github" target="_blank" class="project-github" *ngIf="project.github">
                  GitHub
                </a>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-technologies">
                <span class="tech-tag" *ngFor="let tech of project.technologies">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles Section -->
    <section id="articles" class="section bg-light">
      <div class="container">
        <h2 class="section-title">Artículos</h2>
        <div class="articles-grid grid grid-3">
          <article class="article-card card" *ngFor="let article of articles">
            <div class="article-image">
              <img [src]="article.image" [alt]="article.title">
            </div>
            <div class="article-content">
              <div class="article-meta">
                <span class="article-date">{{ article.date }}</span>
                <span class="article-read-time">{{ article.readTime }}</span>
              </div>
              <h3 class="article-title">{{ article.title }}</h3>
              <p class="article-excerpt">{{ article.excerpt }}</p>
              <a [href]="article.link" class="article-link">Leer más →</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="section">
      <div class="container">
        <h2 class="section-title">Recomendaciones</h2>
        <div class="testimonials-grid grid grid-2">
          <div class="testimonial-card card" *ngFor="let testimonial of testimonials">
            <div class="testimonial-content">
              <p class="testimonial-message">"{{ testimonial.message }}"</p>
            </div>
            <div class="testimonial-author">
              <img [src]="testimonial.avatar" [alt]="testimonial.name" class="testimonial-avatar">
              <div class="testimonial-info">
                <h4 class="testimonial-name">{{ testimonial.name }}</h4>
                <p class="testimonial-position">{{ testimonial.position }} en {{ testimonial.company }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section bg-gradient">
      <div class="container">
        <h2 class="section-title">Contacto</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>¡Hablemos!</h3>
            <p>¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ver cómo puedo ayudarte.</p>
            <div class="contact-details">
              <div class="contact-item">
                <strong>Email:</strong>
                <a href="mailto:maria&#64;ejemplo.com">maria&#64;ejemplo.com</a>
              </div>
              <div class="contact-item">
                <strong>Teléfono:</strong>
                <a href="tel:+34123456789">+34 123 456 789</a>
              </div>
              <div class="contact-item">
                <strong>LinkedIn:</strong>
                <a href="https://linkedin.com/in/mariagarcia" target="_blank">linkedin.com/in/mariagarcia</a>
              </div>
            </div>
          </div>
          <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="form-group">
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
            </div>
            <div class="form-group">
              <label for="subject">Asunto</label>
              <input type="text" id="subject" name="subject" [(ngModel)]="formData.subject" required>
            </div>
            <div class="form-group">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message" rows="5" [(ngModel)]="formData.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="!contactForm.form.valid">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <p>&copy; 2025 María García. Todos los derechos reservados.</p>
          <div class="social-links">
            <a href="#" target="_blank">GitHub</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Navigation */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--color-gray-200);
      z-index: 1000;
      padding: 1rem 0;
    }

    .navbar .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-brand h2 {
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-weight: 700;
    }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    .nav-menu a {
      text-decoration: none;
      color: var(--color-gray-700);
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-menu a:hover {
      color: var(--color-primary);
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      cursor: pointer;
    }

    .nav-toggle span {
      width: 25px;
      height: 3px;
      background: var(--color-gray-700);
      margin: 3px 0;
      transition: 0.3s;
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      position: relative;
      overflow: hidden;
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 2;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      color: var(--color-white);
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .hero-description {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .gradient-text {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .hero-image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-avatar {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid rgba(255, 255, 255, 0.2);
      position: relative;
      z-index: 2;
    }

    .hero-avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .floating-elements {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .floating-element {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      animation: float 6s ease-in-out infinite;
    }

    .element-1 {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .element-2 {
      width: 60px;
      height: 60px;
      top: 60%;
      right: 20%;
      animation-delay: 2s;
    }

    .element-3 {
      width: 100px;
      height: 100px;
      bottom: 20%;
      left: 20%;
      animation-delay: 4s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }

    /* About Section */
    .about-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .about-paragraph {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      color: var(--color-gray-600);
    }

    .skills h3 {
      margin-bottom: 1.5rem;
      color: var(--color-gray-800);
    }

    .skills-grid {
      display: grid;
      gap: 1rem;
    }

    .skill-item {
      display: grid;
      gap: 0.5rem;
    }

    .skill-name {
      font-weight: 500;
      color: var(--color-gray-700);
    }

    .skill-bar {
      height: 8px;
      background: var(--color-gray-200);
      border-radius: 4px;
      overflow: hidden;
    }

    .skill-progress {
      height: 100%;
      background: var(--gradient-primary);
      border-radius: 4px;
      transition: width 2s ease-in-out;
    }

    .about-stats {
      display: grid;
      gap: 1.5rem;
    }

    .stat-card {
      text-align: center;
      padding: 1.5rem;
      background: var(--gradient-accent);
      border-radius: 1rem;
      color: var(--color-white);
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.9;
    }

    /* Experience Section */
    .bg-gradient {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #4facfe 100%);
      position: relative;
    }

    .bg-gradient::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
    }

    .bg-gradient .container {
      position: relative;
      z-index: 2;
    }

    .experience-timeline {
      position: relative;
      max-width: 800px;
      margin: 0 auto;
    }

    .experience-timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 2px;
      background: var(--gradient-primary);
      transform: translateX(-50%);
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3rem;
    }

    .timeline-left .timeline-content {
      margin-right: 55%;
    }

    .timeline-right .timeline-content {
      margin-left: 55%;
    }

    .timeline-content {
      background: var(--color-white);
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: var(--shadow-lg);
      position: relative;
    }

    .timeline-content::before {
      content: '';
      position: absolute;
      top: 50%;
      width: 15px;
      height: 15px;
      background: var(--color-primary);
      border-radius: 50%;
      transform: translateY(-50%);
    }

    .timeline-left .timeline-content::before {
      right: -62px;
    }

    .timeline-right .timeline-content::before {
      left: -62px;
    }

    .timeline-header h3 {
      color: var(--color-primary);
      font-size: 1.3rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .timeline-header h4 {
      color: var(--color-gray-700);
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    .timeline-period {
      background: var(--gradient-accent);
      color: var(--color-white);
      padding: 0.3rem 0.8rem;
      border-radius: 1rem;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .timeline-description {
      margin: 1.5rem 0;
      padding-left: 1rem;
    }

    .timeline-description li {
      margin-bottom: 0.5rem;
      color: var(--color-gray-600);
    }

    .timeline-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tech-tag {
      background: var(--color-gray-100);
      color: var(--color-gray-700);
      padding: 0.3rem 0.8rem;
      border-radius: 1rem;
      font-size: 0.8rem;
      font-weight: 500;
    }

    /* Projects Section */
    .projects-grid {
      margin-top: 2rem;
    }

    .project-card {
      overflow: hidden;
      padding: 0;
    }

    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .project-image img {
      transform: scale(1.1);
    }

    .project-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(139, 92, 246, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-link, .project-github {
      background: var(--color-white);
      color: var(--color-primary);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .project-link:hover, .project-github:hover {
      background: var(--color-primary);
      color: var(--color-white);
    }

    .project-content {
      padding: 2rem;
    }

    .project-title {
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--color-gray-800);
      margin-bottom: 1rem;
    }

    .project-description {
      color: var(--color-gray-600);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .project-technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    /* Articles Section */
    .bg-light {
      background: var(--color-gray-50);
    }

    .article-card {
      overflow: hidden;
      padding: 0;
    }

    .article-image {
      height: 150px;
      overflow: hidden;
    }

    .article-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .article-card:hover .article-image img {
      transform: scale(1.05);
    }

    .article-content {
      padding: 1.5rem;
    }

    .article-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: var(--color-gray-500);
    }

    .article-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--color-gray-800);
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }

    .article-excerpt {
      color: var(--color-gray-600);
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .article-link {
      color: var(--color-primary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .article-link:hover {
      color: var(--color-secondary);
    }

    /* Testimonials Section */
    .testimonial-card {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .testimonial-message {
      font-style: italic;
      color: var(--color-gray-600);
      line-height: 1.6;
      position: relative;
    }

    .testimonial-message::before {
      content: '"';
      font-size: 4rem;
      color: var(--color-primary);
      position: absolute;
      top: -1rem;
      left: -1rem;
      opacity: 0.3;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .testimonial-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .testimonial-name {
      font-weight: 600;
      color: var(--color-gray-800);
      margin-bottom: 0.3rem;
    }

    .testimonial-position {
      color: var(--color-gray-500);
      font-size: 0.9rem;
    }

    /* Contact Section */
    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
    }

    .contact-info h3 {
      font-size: 2rem;
      color: var(--color-white);
      margin-bottom: 1rem;
    }

    .contact-info p {
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }

    .contact-details {
      display: grid;
      gap: 1rem;
    }

    .contact-item {
      color: rgba(255, 255, 255, 0.9);
    }

    .contact-item strong {
      color: var(--color-white);
      margin-right: 0.5rem;
    }

    .contact-item a {
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .contact-item a:hover {
      color: var(--color-white);
    }

    .contact-form {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      color: var(--color-white);
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      color: var(--color-white);
      font-size: 1rem;
      transition: all 0.3s ease;
    }

    .form-group input::placeholder,
    .form-group textarea::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.6);
      background: rgba(255, 255, 255, 0.15);
    }

    /* Footer */
    .footer {
      background: var(--color-gray-900);
      padding: 2rem 0;
    }

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--color-gray-300);
    }

    .social-links {
      display: flex;
      gap: 1.5rem;
    }

    .social-links a {
      color: var(--color-gray-300);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: var(--color-white);
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
      .nav-menu {
        display: none;
      }

      .nav-toggle {
        display: flex;
      }

      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 2rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .about-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .experience-timeline::before {
        left: 30px;
      }

      .timeline-left .timeline-content,
      .timeline-right .timeline-content {
        margin-left: 60px;
        margin-right: 0;
      }

      .timeline-left .timeline-content::before,
      .timeline-right .timeline-content::before {
        left: -62px;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .footer-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  `]
})
export class App {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'Angular/React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'CSS/SASS', level: 90 },
    { name: 'MongoDB/PostgreSQL', level: 75 }
  ];

  stats = [
    { number: '50+', label: 'Proyectos Completados' },
    { number: '5+', label: 'Años de Experiencia' },
    { number: '20+', label: 'Clientes Satisfechos' }
  ];

  experiences: Experience[] = [
    {
      id: 1,
      position: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Presente',
      description: [
        'Liderazgo del equipo de desarrollo frontend con Angular y React',
        'Implementación de arquitecturas escalables y mantenibles',
        'Mentoring a desarrolladores junior y code reviews'
      ],
      technologies: ['Angular', 'React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      id: 2,
      position: 'Frontend Developer',
      company: 'Innovate Digital',
      period: '2020 - 2022',
      description: [
        'Desarrollo de aplicaciones web modernas y responsivas',
        'Colaboración estrecha con el equipo de UX/UI',
        'Optimización de rendimiento y SEO'
      ],
      technologies: ['Vue.js', 'JavaScript', 'SASS', 'Webpack', 'Firebase']
    },
    {
      id: 3,
      position: 'Junior Web Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: [
        'Desarrollo de features para plataforma e-commerce',
        'Mantenimiento y mejora de código legacy',
        'Implementación de tests unitarios'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma completa de comercio electrónico con panel de administración, gestión de productos y pasarela de pagos.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas colaborativa con tiempo real, notificaciones y dashboard analítico.',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'Sistema de gestión de aprendizaje con cursos online, evaluaciones y seguimiento de progreso.',
      technologies: ['Vue.js', 'Python', 'Django', 'Redis'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#'
    },
    {
      id: 4,
      title: 'Portfolio Dashboard',
      description: 'Dashboard interactivo para gestión de portfolio de inversiones con gráficos en tiempo real.',
      technologies: ['Angular', 'D3.js', 'Node.js', 'WebSocket'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
      github: '#'
    }
  ];

  articles: Article[] = [
    {
      id: 1,
      title: 'Mejores Prácticas en Angular 18',
      excerpt: 'Descubre las últimas características y mejores prácticas para desarrollar aplicaciones modernas con Angular 18.',
      date: '15 Mar 2024',
      readTime: '8 min',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#'
    },
    {
      id: 2,
      title: 'Microservicios con Node.js',
      excerpt: 'Guía completa para implementar una arquitectura de microservicios escalable usando Node.js y Docker.',
      date: '28 Feb 2024',
      readTime: '12 min',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#'
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      excerpt: 'Comparación detallada entre CSS Grid y Flexbox, cuándo usar cada uno y ejemplos prácticos.',
      date: '10 Feb 2024',
      readTime: '6 min',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#'
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      position: 'CTO',
      company: 'TechStart',
      message: 'María es una desarrolladora excepcional. Su atención al detalle y capacidad para resolver problemas complejos la convierten en un activo invaluable para cualquier equipo.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      name: 'Ana López',
      position: 'Product Manager',
      company: 'InnovaCorp',
      message: 'Trabajar con María fue una experiencia fantástica. Su profesionalismo y habilidades técnicas superaron todas nuestras expectativas.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Miguel Santos',
      position: 'Lead Designer',
      company: 'Creative Studio',
      message: 'María tiene una increíble capacidad para transformar diseños complejos en código limpio y funcional. Altamente recomendada.',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      name: 'Laura Jiménez',
      position: 'CEO',
      company: 'DigitalNext',
      message: 'La dedicación y expertise técnico de María fueron fundamentales para el éxito de nuestro proyecto. Una profesional de primera clase.',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  scrollTo(elementId: string) {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMenu() {
    // Implementar toggle de menú móvil si es necesario
    console.log('Toggle menu');
  }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Aquí podrías integrar con un servicio de email
    alert('¡Mensaje enviado correctamente! Te contactaré pronto.');
    this.formData = { name: '', email: '', subject: '', message: '' };
  }
}

bootstrapApplication(App);