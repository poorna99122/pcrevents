import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, HeroComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-ring',
      title: 'Wedding Planning',
      img: 'assets/images/hero-wedding.png',
      desc: 'From intimate garden ceremonies to grand ballroom weddings, we orchestrate every detail — venues, catering, florals, lighting, music, and guest coordination — so you can savour every moment of your perfect day.',
      features: ['Venue Selection', 'Catering Management', 'Floral Arrangements', 'Guest Coordination', 'Photography Setup', 'Day-of Coordination'],
    },
    {
      icon: 'fas fa-gem',
      title: 'Engagement Planning',
      img: 'assets/images/service-engagement.png',
      desc: 'Begin your forever story with a breathtaking proposal or engagement event. We create magical settings that capture emotions, complete with themed décor, candlelit atmospheres, and personalised surprises.',
      features: ['Themed Décor', 'Photography', 'Personalised Surprises', 'Intimate Dinners', 'Floral Setups', 'Music & Entertainment'],
    },
    {
      icon: 'fas fa-birthday-cake',
      title: 'Birthday Celebrations',
      img: 'assets/images/service-birthday.png',
      desc: 'Whether it\'s a first birthday bash or a milestone 50th, we design unforgettable birthday celebrations tailored to your personality, complete with custom themes, cakes, decor, and entertainment.',
      features: ['Custom Themes', 'Venue Decoration', 'Entertainment Planning', 'Catering & Cake', 'Photo Booth', 'Party Favours'],
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Corporate Events',
      img: 'assets/images/service-corporate.png',
      desc: 'Elevate your brand with impeccably managed corporate events. From product launches and annual conferences to award nights and team outings, we handle logistics, AV setup, and branding elements seamlessly.',
      features: ['Conference Management', 'Award Ceremonies', 'Product Launches', 'Team Building Events', 'AV & Tech Setup', 'Branded Décor'],
    },
    {
      icon: 'fas fa-palette',
      title: 'Decoration Services',
      img: 'assets/images/service-decoration.png',
      desc: 'Transform any space into a visual masterpiece. Our decoration specialists create themed environments with luxury florals, fabric draping, custom lighting installations, and artistic tablescape designs.',
      features: ['Floral Installations', 'Fabric Draping', 'Custom Lighting', 'Tablescape Design', 'Entrance Décor', 'Photo Backdrops'],
    },
  ];
}
