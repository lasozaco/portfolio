import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isSubmitting = signal(false);
  
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  contactMethods = signal([
    {
      icon: '📧',
      title: 'Email',
      value: 'laura.sophia.zapata@gmail.com'
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      value: '+57 300 123 4567'
    },
    {
      icon: '📍',
      title: 'Ubicación',
      value: 'Colombia (Trabajo remoto disponible)'
    },
    {
      icon: '⏰',
      title: 'Horario',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM (GMT-5)'
    }
  ]);

  socialLinks = signal([
    {
      icon: '💼',
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/laura-sophia-zapata-coronado'
    },
    {
      icon: '🐙',
      name: 'GitHub',
      link: 'https://github.com/laura-sophia'
    },
    {
      icon: '📸',
      name: 'Instagram',
      link: 'https://instagram.com/laura_sophia_dev'
    },
    {
      icon: '🐦',
      name: 'Twitter',
      link: 'https://twitter.com/laura_sophia_dev'
    }
  ]);

  availabilityStatus = signal([
    {
      icon: '✅',
      title: 'Disponible para proyectos',
      description: 'Aceptando nuevos proyectos freelance y oportunidades laborales interesantes.'
    },
    {
      icon: '⏰',
      title: 'Respuesta rápida',
      description: 'Respondo a todos los mensajes dentro de las 24 horas hábiles.'
    },
    {
      icon: '🌍',
      title: 'Trabajo remoto',
      description: 'Disponible para trabajar con clientes de cualquier parte del mundo.'
    },
    {
      icon: '💼',
      title: 'Colaboración',
      description: 'Interesada en proyectos desafiantes y oportunidades de crecimiento.'
    }
  ]);

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      this.isSubmitting.set(true);
      
      // Simular envío del formulario
      setTimeout(() => {
        console.log('Formulario enviado:', this.formData);
        alert('¡Gracias por tu mensaje! Te responderé pronto.');
        
        // Limpiar formulario
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        
        this.isSubmitting.set(false);
      }, 2000);
    }
  }
}
