import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

export const routes: Routes = [
  { path: '',             component: HomeComponent,         title: 'PCR Events — Home' },
  { path: 'about',       component: AboutComponent,        title: 'About Us — PCR Events' },
  { path: 'services',    component: ServicesComponent,     title: 'Our Services — PCR Events' },
  { path: 'portfolio',   component: PortfolioComponent,    title: 'Portfolio — PCR Events' },
  { path: 'contact',     component: ContactComponent,      title: 'Contact Us — PCR Events' },
  { path: 'testimonials',component: TestimonialsComponent, title: 'Testimonials — PCR Events' },
  { path: '**',          redirectTo: '' }
];
