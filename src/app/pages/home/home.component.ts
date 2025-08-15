import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  techStack = signal([
    { icon: '🅰️', name: 'Angular' },
    { icon: '⚛️', name: 'React' },
    { icon: '🎨', name: 'CSS3/SCSS' },
    { icon: '⚡', name: 'TypeScript' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🔥', name: 'Firebase' }
  ]);

  features = signal([
    {
      icon: '💻',
      title: 'Desarrollo Full Stack',
      description: 'Especializada en crear aplicaciones web completas con Angular, React y Node.js. Experiencia en bases de datos y APIs RESTful.'
    },
    {
      icon: '🎨',
      title: 'Diseño UX/UI',
      description: 'Creo interfaces intuitivas y atractivas que mejoran la experiencia del usuario. Enfoque en diseño responsivo y accesibilidad.'
    },
    {
      icon: '🚀',
      title: 'Optimización & Performance',
      description: 'Optimizo aplicaciones para máxima velocidad y rendimiento. Implemento las mejores prácticas de SEO y Core Web Vitals.'
    },
    {
      icon: '🤝',
      title: 'Trabajo en Equipo',
      description: 'Experiencia colaborando con equipos multidisciplinarios. Comunicación efectiva y metodologías ágiles.'
    }
  ]);
}
