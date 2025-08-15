import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = signal([
    {
      title: 'E-commerce Personal',
      description: 'Tienda online completa desarrollada con Angular y Firebase. Incluye carrito de compras, autenticación y panel de administración.',
      icon: '🛒',
      technologies: ['Angular', 'Firebase', 'TypeScript', 'CSS3'],
      features: [
        'Catálogo de productos con filtros',
        'Sistema de autenticación de usuarios',
        'Carrito de compras funcional',
        'Panel de administración básico'
      ],
      demo: 'https://mi-tienda-demo.vercel.app',
      github: 'https://github.com/laura-sophia/ecommerce-angular'
    },
    {
      title: 'Task Manager App',
      description: 'Aplicación de gestión de tareas con funcionalidades de drag & drop y persistencia local.',
      icon: '📋',
      technologies: ['React', 'TypeScript', 'LocalStorage', 'CSS Grid'],
      features: [
        'Gestión de tareas con drag & drop',
        'Categorización por prioridad',
        'Persistencia de datos local',
        'Diseño responsivo'
      ],
      demo: 'https://task-manager-demo.netlify.app',
      github: 'https://github.com/laura-sophia/task-manager'
    },
    {
      title: 'Weather App',
      description: 'Aplicación meteorológica que consume APIs públicas para mostrar el clima en tiempo real.',
      icon: '🌤️',
      technologies: ['JavaScript', 'OpenWeather API', 'CSS3', 'Fetch API'],
      features: [
        'Datos meteorológicos en tiempo real',
        'Búsqueda por ciudad',
        'Pronóstico de 5 días',
        'Interfaz intuitiva'
      ],
      demo: 'https://weather-app-demo.netlify.app',
      github: 'https://github.com/laura-sophia/weather-app'
    },
    {
      title: 'Portfolio Personal',
      description: 'Sitio web personal desarrollado con Angular 20, mostrando proyectos y habilidades profesionales.',
      icon: '🎨',
      technologies: ['Angular 20', 'TypeScript', 'CSS3', 'Responsive Design'],
      features: [
        'Diseño moderno y responsivo',
        'Navegación fluida',
        'Formulario de contacto funcional',
        'Optimización SEO'
      ],
      demo: 'https://laura-sophia-portfolio.vercel.app',
      github: 'https://github.com/laura-sophia/portfolio'
    },
    {
      title: 'Calculator App',
      description: 'Calculadora web con funcionalidades avanzadas y diseño moderno.',
      icon: '🧮',
      technologies: ['JavaScript', 'CSS3', 'HTML5', 'Flexbox'],
      features: [
        'Operaciones matemáticas básicas',
        'Historial de cálculos',
        'Diseño responsive',
        'Teclado numérico virtual'
      ],
      demo: 'https://calculator-app-demo.netlify.app',
      github: 'https://github.com/laura-sophia/calculator'
    },
    {
      title: 'Quiz App',
      description: 'Aplicación de preguntas y respuestas con diferentes categorías y puntuación.',
      icon: '❓',
      technologies: ['React', 'JavaScript', 'CSS3', 'LocalStorage'],
      features: [
        'Múltiples categorías de preguntas',
        'Sistema de puntuación',
        'Progreso guardado',
        'Interfaz amigable'
      ],
      demo: 'https://quiz-app-demo.netlify.app',
      github: 'https://github.com/laura-sophia/quiz-app'
    }
  ]);
}

