import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = signal([
    {
      title: 'Frontend Development',
      skills: [
        {
          name: 'HTML5 & CSS3',
          icon: '🎨',
          level: 90,
          description: 'Maestría en maquetación web, CSS Grid, Flexbox y diseño responsivo'
        },
        {
          name: 'JavaScript (ES6+)',
          icon: '⚡',
          level: 85,
          description: 'Programación moderna, async/await, destructuring y módulos ES6'
        },
        {
          name: 'Angular',
          icon: '🅰️',
          level: 80,
          description: 'Componentes, servicios, routing, formularios reactivos y TypeScript'
        },
        {
          name: 'React',
          icon: '⚛️',
          level: 75,
          description: 'Hooks, componentes funcionales, Context API y JSX'
        },
        {
          name: 'TypeScript',
          icon: '📘',
          level: 80,
          description: 'Tipado estático, interfaces, generics y decoradores'
        },
        {
          name: 'SCSS/Sass',
          icon: '🎨',
          level: 85,
          description: 'Variables, mixins, nesting y organización de estilos'
        }
      ]
    },
    {
      title: 'Backend & Tools',
      skills: [
        {
          name: 'Node.js',
          icon: '🟢',
          level: 70,
          description: 'Servidores Express, APIs RESTful y manejo de rutas'
        },
        {
          name: 'Firebase',
          icon: '🔥',
          level: 75,
          description: 'Autenticación, Firestore, hosting y funciones cloud'
        },
        {
          name: 'Git & GitHub',
          icon: '🐙',
          level: 85,
          description: 'Control de versiones, branching, merging y colaboración'
        },
        {
          name: 'REST APIs',
          icon: '🌐',
          level: 75,
          description: 'Consumo de APIs, fetch, axios y manejo de datos JSON'
        }
      ]
    },
    {
      title: 'Herramientas & Otros',
      skills: [
        {
          name: 'VS Code',
          icon: '📝',
          level: 90,
          description: 'Editor principal con extensiones y configuración personalizada'
        },
        {
          name: 'Responsive Design',
          icon: '📱',
          level: 85,
          description: 'Mobile-first, breakpoints y testing en múltiples dispositivos'
        },
        {
          name: 'Figma',
          icon: '🎨',
          level: 70,
          description: 'Diseño de interfaces, prototipado y colaboración'
        },
        {
          name: 'Deployment',
          icon: '🚀',
          level: 75,
          description: 'Vercel, Netlify, GitHub Pages y configuración de dominios'
        }
      ]
    }
  ]);

  tools = signal([
    { icon: '🎨', name: 'Figma' },
    { icon: '📝', name: 'VS Code' },
    { icon: '🐙', name: 'Git' },
    { icon: '📦', name: 'npm' },
    { icon: '🔄', name: 'Webpack' },
    { icon: '🎯', name: 'Jest' },
    { icon: '📊', name: 'Postman' },
    { icon: '🚀', name: 'Vercel' },
    { icon: '📱', name: 'Chrome DevTools' },
    { icon: '🎨', name: 'CSS Grid' },
    { icon: '⚡', name: 'ESLint' },
    { icon: '📋', name: 'Trello' }
  ]);

  learningTechs = signal([
    {
      icon: '⚡',
      name: 'Next.js',
      status: 'Aprendiendo - SSR y optimización'
    },
    {
      icon: '🐍',
      name: 'Python',
      status: 'Fundamentos - Backend básico'
    },
    {
      icon: '📱',
      name: 'React Native',
      status: 'Explorando - Desarrollo móvil'
    },
    {
      icon: '🔒',
      name: 'Cybersecurity',
      status: 'Conceptos básicos - Mejores prácticas'
    }
  ]);
}
