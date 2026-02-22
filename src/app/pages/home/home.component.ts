import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeroComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services = [
    { icon: 'fas fa-ring',        title: 'Wedding Planning',     desc: 'From intimate ceremonies to grand celebrations, we craft weddings that reflect your love story perfectly.',      img: 'assets/images/hero-wedding.png',       link: '/services' },
    { icon: 'fas fa-gem',         title: 'Engagement Events',    desc: 'Romantic and bespoke engagement setups that make your special moment unforgettably magical.',              img: 'assets/images/service-engagement.png', link: '/services' },
    { icon: 'fas fa-birthday-cake',title: 'Birthday Parties',    desc: 'Personalised birthday celebrations for all ages — from kids\' parties to milestone adult events.',            img: 'assets/images/service-birthday.png',   link: '/services' },
    { icon: 'fas fa-briefcase',   title: 'Corporate Events',     desc: 'Professional event management for conferences, award nights, product launches, and corporate galas.',        img: 'assets/images/service-corporate.png',  link: '/services' },
    { icon: 'fas fa-palette',     title: 'Decoration Services',  desc: 'Breathtaking floral arrangements, lush drapes, custom themes, and stunning décor for every occasion.',     img: 'assets/images/service-decoration.png', link: '/services' },
  ];

  portfolioItems = [
    { img: 'assets/images/hero-wedding.png',       category: 'Wedding',     title: 'Royal Garden Wedding' },
    { img: 'assets/images/service-engagement.png', category: 'Engagement',  title: 'Sunset Engagement Ceremony' },
    { img: 'assets/images/service-birthday.png',   category: 'Birthday',    title: 'Golden Gala Birthday' },
  ];

  testimonials = [
    { name: 'Priya & Arjun Sharma', role: 'Wedding Client', stars: 5, text: 'PCR Events made our wedding day absolutely perfect. Every detail was handled with such grace and professionalism. We couldn\'t have asked for more!' },
    { name: 'Neha Kapoor',          role: 'Corporate Event', stars: 5, text: 'They managed our annual awards night flawlessly. The decor, the timeline, the coordination — all outstanding. Highly recommended!' },
    { name: 'Rohit & Meera Verma',  role: 'Engagement Client', stars: 5, text: 'The engagement setup was beyond our imagination. Every flower, every light was placed with love. Our family and guests were amazed!' },
  ];

  stats = [
    { value: '500+', label: 'Events Planned' },
    { value: '12+',  label: 'Years Experience' },
    { value: '98%',  label: 'Happy Clients' },
    { value: '50+',  label: 'Expert Team Members' },
  ];
}
