import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
    { label: 'Home',         path: '/' },
    { label: 'About',        path: '/about' },
    { label: 'Services',     path: '/services' },
    { label: 'Portfolio',    path: '/portfolio' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact',      path: '/contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
