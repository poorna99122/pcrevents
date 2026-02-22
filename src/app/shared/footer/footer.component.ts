import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home',         path: '/' },
    { label: 'About Us',     path: '/about' },
    { label: 'Services',     path: '/services' },
    { label: 'Portfolio',    path: '/portfolio' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact',      path: '/contact' },
  ];

  services = [
    'Wedding Planning',
    'Engagement Planning',
    'Birthday Events',
    'Corporate Events',
    'Decoration Services',
  ];

  socials = [
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
    { icon: 'fab fa-whatsapp', href: '#', label: 'WhatsApp' },
    { icon: 'fab fa-youtube', href: '#', label: 'YouTube' },
  ];
}
