import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = signal([
    { number: '2+', label: 'Años de Experiencia' },
    { number: '15+', label: 'Proyectos Completados' },
    { number: '12+', label: 'Tecnologías Dominadas' },
    { number: '100%', label: 'Compromiso con la Calidad' }
  ]);

  interests = signal([
    { icon: '💻', text: 'Desarrollo Web Moderno' },
    { icon: '🎨', text: 'Diseño de Interfaces' },
    { icon: '📱', text: 'Aplicaciones Responsivas' },
    { icon: '🚀', text: 'Tecnologías Emergentes' },
    { icon: '📚', text: 'Aprendizaje Continuo' },
    { icon: '🌍', text: 'Trabajo Remoto Global' }
  ]);

  values = signal([
    {
      icon: '🎯',
      title: 'Enfoque en Resultados',
      description: 'Me comprometo a entregar soluciones que cumplan con los objetivos del proyecto y superen las expectativas del cliente.'
    },
    {
      icon: '🤝',
      title: 'Colaboración Efectiva',
      description: 'Creo en el poder del trabajo en equipo y la comunicación clara para lograr los mejores resultados posibles.'
    },
    {
      icon: '🔧',
      title: 'Calidad y Excelencia',
      description: 'Mantengo altos estándares de calidad en cada línea de código y cada decisión de diseño que tomo.'
    },
    {
      icon: '💡',
      title: 'Innovación Constante',
      description: 'Busco constantemente nuevas formas de resolver problemas y mejorar las experiencias digitales.'
    }
  ]);
}
